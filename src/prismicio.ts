import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";
import QuickLRU from "quick-lru";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "home",
    path: "/:lang?",
  },
];

const createCustomFetch = () => {
  const lru = new QuickLRU<string, Response>({ maxSize: 100 });

  return async (url: RequestInfo, options?: RequestInit): Promise<Response> => {
    const cacheKey = `${url}:${JSON.stringify(options)}`;

    if (lru.has(cacheKey)) {
      return lru.get(cacheKey)!.clone(); // Clone to ensure the response is still consumable
    }

    const response = await fetch(url, options);
    const clonedResponse = response.clone();

    lru.set(cacheKey, clonedResponse);

    return response;
  };
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const customFetch = createCustomFetch();

  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    fetch: customFetch,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

export const client = createClient();
