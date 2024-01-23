import HeadingsH1 from "./MDXHeadings/Headings_h1.astro";
import HeadingsH2 from "./MDXHeadings/Headings_h2.astro";
import HeadingsH3 from "./MDXHeadings/Headings_h3.astro";
import HeadingsStrong from "./MDXHeadings/Headings_strong.astro";
import MDXImage from "./MDXImage.astro";
import MDXPositionableImage from "./MDXPositionableImage.astro";

export default {
  PositionableImage: MDXPositionableImage,
  h1: HeadingsH1,
  h2: HeadingsH2,
  h3: HeadingsH3,
  h4: HeadingsStrong,
  h5: HeadingsStrong,
  h6: HeadingsStrong,
  img: MDXImage,
};
