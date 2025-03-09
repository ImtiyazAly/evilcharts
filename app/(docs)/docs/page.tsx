import React from "react";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import {
  DocsContainer,
  DocsDescription,
  DocsLink,
  DocsParagraph,
  DocsSubContainer,
  DocsSubtitle,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import { WhiteSpan } from "@/components/ui/typography";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Introduction" />
        <DocsDescription>
          While searching for SVG components with smooth animations and dynamic
          path transitions, I realized there weren&apos;t many options
          available. So, I decided to build my own.
        </DocsDescription>
      </DocsContainer>
      <DocsParagraph>
        <WhiteSpan>SVG UI</WhiteSpan> is a library of SVG components with smooth
        animations and dynamic path transitions. It is built with React and
        Typescript.
      </DocsParagraph>
      <DocsParagraph>
        It is a collection of SVG components with smooth animations and dynamic
        path transitions.
      </DocsParagraph>
      <DocsSubContainer>
        <DocsSubtitle title="Philosophy" />
        <DocsParagraph>
          I set out to create a library of <WhiteSpan>SVG components</WhiteSpan>{" "}
          with smooth animations and dynamic path transitions. My goal was to
          make it easy to use, highly customizable, and accessible to everyone.
        </DocsParagraph>
        <DocsSubtitle title="Why SVG UI?" />
        <DocsParagraph>
          In today&apos;s web development landscape, creating engaging user
          interfaces is crucial for establishing trust and credibility. SVG UI
          empowers developers to enhance their applications with beautiful,
          animated SVG components without requiring deep knowledge of SVG
          creation.
        </DocsParagraph>
        <DocsParagraph>
          Our library solves common challenges by providing:
        </DocsParagraph>
        <DocsParagraph>
          • Ready-to-use SVG components with stunning animations
          <br />
          • Simple copy-paste implementation
          <br />
          • Seamless integration with modern frameworks
          <br />
          • Performance-optimized animations
          <br />• Customizable designs to match your brand
        </DocsParagraph>
        <DocsSubtitle title="Design Philosophy" />
        <DocsParagraph>
          We believe that exceptional design and smooth animations can transform
          a good website into an outstanding one. By providing high-quality SVG
          components, we enable developers to create memorable user experiences
          that leave lasting impressions on their visitors.
        </DocsParagraph>
        <DocsParagraph>
          Built with modern web standards and inspired by leading UI libraries
          like shadcn/ui, SVG UI brings a new era of animation possibilities to
          your landing pages and applications.
        </DocsParagraph>
      </DocsSubContainer>
      <DocsSubContainer>
        <DocsParagraph>
          Our SVG Components are built with{" "}
          <DocsLink href="https://ui.shadcn.com/" _blank>
            Shadcn UI&apos;s
          </DocsLink>{" "}
          design system.
        </DocsParagraph>
      </DocsSubContainer>
    </div>
  );
};
export default Page;
