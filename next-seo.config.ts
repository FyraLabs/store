const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "FyraStore";
const url = "https://fyra.store";

const seo = {
  title,
  titleTemplate: "%s",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@teamfyralabs",
    site: "@teamfyralabs",
  },
};

export { seo as defaultSEO, url as defaultUrl };
