import { useEffect } from "react";

const SITE_URL = "https://ismailmarkhi.dev";

const DEFAULTS = {
  siteName: "Ismail Markhi",
  author: "Ismail Markhi",
  role: "Web Developer",
  location: "Morocco",
  locale: "en_US",
  themeColor: "#09090b",
  defaultPath: "/",
  defaultImage: `${SITE_URL}/image.png`,
  defaultImageAlt: "Ismail Markhi portfolio preview",
  twitterCard: "summary_large_image",
  twitterHandle: "@ismailmarkhi",
  sameAs: [
    "https://github.com/IsmailMarkhi",
    "https://www.linkedin.com/in/ismail-markhi-a67033317/",
    "https://www.instagram.com/ismailmarkhi",
  ],
  defaultKeywords: [
    "Ismail Markhi",
    "Ismail Markhi portfolio",
    "Web Developer",
    "Web Developer Morocco",
    "React Developer",
    "Laravel Developer",
    "PHP Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Tailwind CSS",
    "JavaScript",
    "Morocco",
  ],
};

const MANAGED_ATTR = "data-seo-managed";
const MANAGED_VALUE = "useSEO";

function normalizePath(path = "/") {
  if (!path || typeof path !== "string") return "/";

  const trimmed = path.trim();

  if (!trimmed) return "/";

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const url = new URL(trimmed);
    return `${url.pathname}${url.search}${url.hash}` || "/";
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function buildUrl(path = "/") {
  return new URL(normalizePath(path), SITE_URL).toString();
}

function uniqueKeywords(input = []) {
  return [...new Set(input.map((item) => String(item).trim()).filter(Boolean))];
}

function upsertMeta({ key, attr, value, content }) {
  const selector = `meta[${MANAGED_ATTR}="${MANAGED_VALUE}"][${attr}="${value}"]`;
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(MANAGED_ATTR, MANAGED_VALUE);
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
  el.setAttribute("data-seo-key", key);
}

function upsertLink({ key, rel, href }) {
  const selector = `link[${MANAGED_ATTR}="${MANAGED_VALUE}"][rel="${rel}"]`;
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("link");
    el.setAttribute(MANAGED_ATTR, MANAGED_VALUE);
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
  el.setAttribute("data-seo-key", key);
}

function upsertJsonLd({ key, data }) {
  const selector = `script[type="application/ld+json"][${MANAGED_ATTR}="${MANAGED_VALUE}"][data-seo-key="${key}"]`;
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute(MANAGED_ATTR, MANAGED_VALUE);
    el.setAttribute("data-seo-key", key);
    document.head.appendChild(el);
  }

  el.textContent = JSON.stringify(data);
}

function removeManagedJsonLdExcept(keysToKeep) {
  const scripts = document.head.querySelectorAll(
    `script[type="application/ld+json"][${MANAGED_ATTR}="${MANAGED_VALUE}"]`
  );

  scripts.forEach((script) => {
    const key = script.getAttribute("data-seo-key");
    if (!keysToKeep.includes(key)) {
      script.remove();
    }
  });
}

function buildPersonSchema({
  name,
  role,
  location,
  url,
  image,
  sameAs,
  description,
  knowsAbout = [],
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    image,
    jobTitle: role,
    description,
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    homeLocation: {
      "@type": "Place",
      name: location,
    },
    sameAs,
    knowsAbout,
  };
}

function buildWebsiteSchema({ name, url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };
}

function buildWebPageSchema({ title, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image,
  };
}

export default function useSEO({
  title,
  description,
  path = DEFAULTS.defaultPath,
  author = DEFAULTS.author,
  siteName = DEFAULTS.siteName,
  role = DEFAULTS.role,
  location = DEFAULTS.location,
  locale = DEFAULTS.locale,
  image = DEFAULTS.defaultImage,
  imageAlt = DEFAULTS.defaultImageAlt,
  imageWidth = "1200",
  imageHeight = "630",
  keywords = [],
  type = "website",
  twitterHandle = DEFAULTS.twitterHandle,
  noindex = false,
  nofollow = false,
  schema = "both", // "person" | "website" | "webpage" | "both" | "all" | "none"
  schemaData = {},
} = {}) {
  useEffect(() => {
    if (!title || !description) {
      console.warn("useSEO: title and description are required");
      return;
    }

    const url = buildUrl(path);
    const robotsParts = [
      noindex ? "noindex" : "index",
      nofollow ? "nofollow" : "follow",
      "max-image-preview:large",
      "max-snippet:-1",
      "max-video-preview:-1",
    ];
    const robots = robotsParts.join(", ");

    const mergedKeywords = uniqueKeywords([
      ...DEFAULTS.defaultKeywords,
      ...keywords,
    ]).join(", ");

    document.title = title;

    // Primary meta
    upsertMeta({
      key: "description",
      attr: "name",
      value: "description",
      content: description,
    });
    upsertMeta({
      key: "author",
      attr: "name",
      value: "author",
      content: author,
    });
    upsertMeta({
      key: "robots",
      attr: "name",
      value: "robots",
      content: robots,
    });
    upsertMeta({
      key: "googlebot",
      attr: "name",
      value: "googlebot",
      content: robots,
    });
    upsertMeta({
      key: "theme-color",
      attr: "name",
      value: "theme-color",
      content: DEFAULTS.themeColor,
    });

    if (mergedKeywords) {
      upsertMeta({
        key: "keywords",
        attr: "name",
        value: "keywords",
        content: mergedKeywords,
      });
    }

    // Open Graph
    upsertMeta({
      key: "og:title",
      attr: "property",
      value: "og:title",
      content: title,
    });
    upsertMeta({
      key: "og:description",
      attr: "property",
      value: "og:description",
      content: description,
    });
    upsertMeta({
      key: "og:url",
      attr: "property",
      value: "og:url",
      content: url,
    });
    upsertMeta({
      key: "og:type",
      attr: "property",
      value: "og:type",
      content: type,
    });
    upsertMeta({
      key: "og:site_name",
      attr: "property",
      value: "og:site_name",
      content: siteName,
    });
    upsertMeta({
      key: "og:locale",
      attr: "property",
      value: "og:locale",
      content: locale,
    });
    upsertMeta({
      key: "og:image",
      attr: "property",
      value: "og:image",
      content: image,
    });
    upsertMeta({
      key: "og:image:alt",
      attr: "property",
      value: "og:image:alt",
      content: imageAlt,
    });
    upsertMeta({
      key: "og:image:width",
      attr: "property",
      value: "og:image:width",
      content: String(imageWidth),
    });
    upsertMeta({
      key: "og:image:height",
      attr: "property",
      value: "og:image:height",
      content: String(imageHeight),
    });

    // Twitter
    upsertMeta({
      key: "twitter:card",
      attr: "name",
      value: "twitter:card",
      content: DEFAULTS.twitterCard,
    });
    upsertMeta({
      key: "twitter:title",
      attr: "name",
      value: "twitter:title",
      content: title,
    });
    upsertMeta({
      key: "twitter:description",
      attr: "name",
      value: "twitter:description",
      content: description,
    });
    upsertMeta({
      key: "twitter:image",
      attr: "name",
      value: "twitter:image",
      content: image,
    });
    upsertMeta({
      key: "twitter:image:alt",
      attr: "name",
      value: "twitter:image:alt",
      content: imageAlt,
    });

    if (twitterHandle) {
      upsertMeta({
        key: "twitter:creator",
        attr: "name",
        value: "twitter:creator",
        content: twitterHandle,
      });
      upsertMeta({
        key: "twitter:site",
        attr: "name",
        value: "twitter:site",
        content: twitterHandle,
      });
    }

    // Canonical
    upsertLink({
      key: "canonical",
      rel: "canonical",
      href: url,
    });

    // Structured data
    const keysToKeep = [];
    const commonKnowsAbout = [
      "React",
      "Laravel",
      "PHP",
      "Python",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Full Stack Development",
      "Web Development",
    ];

    if (schema === "person" || schema === "both" || schema === "all") {
      upsertJsonLd({
        key: "person",
        data: buildPersonSchema({
          name: siteName,
          role,
          location,
          url,
          image,
          sameAs: DEFAULTS.sameAs,
          description,
          knowsAbout: commonKnowsAbout,
          ...(schemaData.person || {}),
        }),
      });
      keysToKeep.push("person");
    }

    if (schema === "website" || schema === "both" || schema === "all") {
      upsertJsonLd({
        key: "website",
        data: buildWebsiteSchema({
          name: siteName,
          url: SITE_URL,
          description,
          ...(schemaData.website || {}),
        }),
      });
      keysToKeep.push("website");
    }

    if (schema === "webpage" || schema === "all") {
      upsertJsonLd({
        key: "webpage",
        data: buildWebPageSchema({
          title,
          description,
          url,
          image,
          ...(schemaData.webpage || {}),
        }),
      });
      keysToKeep.push("webpage");
    }

    if (schema === "none") {
      removeManagedJsonLdExcept([]);
    } else {
      removeManagedJsonLdExcept(keysToKeep);
    }
  }, [
    title,
    description,
    path,
    author,
    siteName,
    role,
    location,
    locale,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    keywords,
    type,
    twitterHandle,
    noindex,
    nofollow,
    schema,
    schemaData,
  ]);
}