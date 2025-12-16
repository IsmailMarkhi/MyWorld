import { useEffect } from "react";

export default function useSEO({
  title,
  description,
  path = "",
  name = "Ismail Markhi",
  role = "Freelance Web Developer",
  location = "Morocco",
}) {
  useEffect(() => {
    // 1️⃣ Title
    document.title = title;

    // 2️⃣ Meta description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3️⃣ Canonical (SEO clean)
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://my-world-teal.vercel.app${path}`
    );

    // 4️⃣ Author (human touch)
    let author = document.querySelector("meta[name='author']");
    if (!author) {
      author = document.createElement("meta");
      author.setAttribute("name", "author");
      document.head.appendChild(author);
    }
    author.setAttribute("content", name);

    // 5️⃣ Keywords (light – not spam)
    let keywords = document.querySelector("meta[name='keywords']");
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute(
      "content",
      `${role}, React Developer, PHP Developer, Laravel Developer, ${location}`
    );
  }, [title, description, path, name, role, location]);
}
