import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import slugify from "slugify";

export default function plugin() {
  return transformer;
}

function transformer(tree) {
  const slugifyTitle = (title) => `${slugify(title, { lower: true })}`;
  visit(tree, "paragraph", (node) => {
    const wikiLink = /!?\[\[([a-zA-Z-'À-ÿ|# ]+)\]\]/g;
    const stringifyNode = toString(node);
    const list = stringifyNode.match(wikiLink);

    if (list && list.length > 0) {
      let url = "";
      let html = stringifyNode;

      list.forEach((link) => {
        let title = link.replace(/!?\[|\]/g, "");

        if (title.match(/\|/)) {
          [url, title] = title.split("|");
          url = slugifyTitle(url);
        } else {
          url = slugifyTitle(title);
        }
        const tooltipLink_Component = `<tooltip lexique="${url}"></tooltip>`;
        html = html.replace(link, tooltipLink_Component);
      });
      node.type = "html";
      node.children = undefined;
      node.value = html;
    }
    return tree;
  });
}
