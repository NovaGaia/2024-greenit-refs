import { visit } from "unist-util-visit";

export default function plugin() {
  return transformer;
}

function transformer(tree) {
  visit(tree, "paragraph", visitor);
}

function visitor(node, index, parent) {
  const highlight = /==(.*)==/g;
  const { children, type, position } = node;

  if (children) {
    children.map((tree) => {
      visit(tree, "text", (element) => {
        if (element.value.match(highlight)) {
          element.value = element.value.replace(
            highlight,
            `<mark className="mark-default">$1</mark>`,
          );
          element.type = "html";
        }
      });
    });
  }
}
