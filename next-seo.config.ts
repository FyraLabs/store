const description =
  "Why stop at repping Fyra online? With our all new professionally designed streetwear, you can take your loyalty anywhere, while not looking like a complete dork.";
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
