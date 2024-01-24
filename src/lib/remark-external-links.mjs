import externalLinks from "remark-external-links";
import { visit } from "unist-util-visit";

export default function plugin(content) {
  return transformer;
}

function transformer(tree) {
  visit(tree, "paragraph", visitor);
}

function visitor(
  node,
  index,
  parent,
  options = {
    target: "_blank",
    rel: ["nofollow", "noopener", "noreferrer"],
  },
) {
  const transformer = externalLinks(options);
  transformer(node, options);
}
