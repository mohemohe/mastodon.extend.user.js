import turndown from "turndown";
// @ts-ignore
import { gfm } from "turndown-plugin-gfm";
import marked from "marked";

const t = new turndown();
t.use(gfm);
t.escape = (_) => _;
t.addRule("image", {
  filter: (node) =>
    (node.nodeName.toLowerCase() === "img" &&
      node.getAttribute("title")?.startsWith(":")) ||
    false,
  replacement: (_, node) => (node as HTMLImageElement).outerHTML,
});
t.addRule("link", {
  filter: (node) =>
    (node.nodeName.toLowerCase() === "a" &&
      node.getAttribute("href") &&
      decodeURIComponent(node.getAttribute("href")!).startsWith("[")) ||
    false,
  replacement: (_, node) => `${(node as HTMLLinkElement).href}`,
});

export function renderMarkdown(element: HTMLElement) {
  console.debug("original:", element);
  const text = t.turndown(element.outerHTML);
  console.debug("turndown:", text);
  return marked(text, {
    gfm: true,
  });
}
