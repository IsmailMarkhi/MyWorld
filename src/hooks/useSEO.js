import { useEffect } from "react";

const SITE_URL = "https://my-world-teal.vercel.app";
const DEFAULT_CONFIG = {
  name: "Ismail Markhi",
  role: "Freelance Web Developer",
  location: "Morocco",
  ogImage: `${SITE_URL}/og-image.jpg`,
  twitterHandle: "@ismailmarkhi",
};

/**
 * useSEO Hook
 * 
 * Manages all SEO meta tags, Open Graph, and Twitter Card tags
 * for optimal search engine and social media visibility.
 * 
 * @hook
 * @param {Object} config - SEO configuration object
 * @param {string} config.title - Page title (required)
 * @param {string} config.description - Page description (required)
 * @param {string} [config.path=""] - URL path for canonical link
 * @param {string} [config.name="Ismail Markhi"] - Author name
 * @param {string} [config.role="Freelance Web Developer"] - Professional role
 * @param {string} [config.location="Morocco"] - Location
 * @param {string} [config.keywords=""] - Additional keywords
 * @param {string} [config.ogImage] - Open Graph image URL
 * @param {string} [config.ogType="website"] - Open Graph type
 * @param {string} [config.twitterHandle] - Twitter handle
 * @param {boolean} [config.noindex=false] - Prevent indexing
 * @example
 * useSEO({
 *   title: "Home | Ismail Markhi",
 *   description: "Freelance web developer...",
 *   path: "/"
 * })
 */
function useSEO({
  title,
  description,
  path = "",
  name = DEFAULT_CONFIG.name,
  role = DEFAULT_CONFIG.role,
  location = DEFAULT_CONFIG.location,
  keywords = "",
  ogImage = DEFAULT_CONFIG.ogImage,
  ogType = "website",
  twitterHandle = DEFAULT_CONFIG.twitterHandle,
  noindex = false,
} = {}) {
  useEffect(() => {
    if (!title || !description) {
      console.warn("useSEO: title and description are required");
      return;
    }

    const fullUrl = `${SITE_URL}${path}`;

    // Set document title
    document.title = title;

    // Helper function to set or create meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      const selector = `meta[${attribute}="${name}"]`;

      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Helper function for link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    setMetaTag("author", name);
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Keywords
    const keywordsList = [
      role,
      "React Developer",
      "PHP Developer",
      "Laravel Developer",
      "Web Developer",
      location,
      ...(keywords ? keywords.split(",").map((k) => k.trim()) : []),
    ]
      .filter(Boolean)
      .join(", ");

    setMetaTag("keywords", keywordsList);

    // Open Graph Tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", fullUrl, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:site_name", name, true);

    // Twitter Card Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);
    if (twitterHandle) {
      setMetaTag("twitter:creator", twitterHandle);
    }

    // Additional Meta Tags for Better SEO
    setMetaTag("theme-color", "#ffffff");
    setMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");

    // Canonical Link
    setLinkTag("canonical", fullUrl);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: name,
      url: SITE_URL,
      jobTitle: role,
      worksFor: {
        "@type": "Organization",
        name: "Freelancer",
      },
      areaServed: location,
      knowsAbout: [
        "React",
        "PHP",
        "Laravel",
        "Web Development",
        "Frontend Development",
      ],
      sameAs: [
        "https://github.com/IsmailMarkhi",
        "https://www.linkedin.com/in/ismail-markhi-a67033317/",
        "https://www.instagram.com/ismailmarkhi",
      ],
    };

    let structuredDataElement = document.querySelector(
      'script[type="application/ld+json"]'
    );

    if (!structuredDataElement) {
      structuredDataElement = document.createElement("script");
      structuredDataElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredDataElement);
    }

    structuredDataElement.textContent = JSON.stringify(structuredData);

    // Cleanup function to prevent memory leaks
    return () => {
      // Optional: Remove meta tags on unmount
      // This is useful if the same page renders multiple SEO hooks
    };
  }, [title, description, path, name, role, location, keywords, ogImage, ogType, twitterHandle, noindex]);
}

export default useSEO;