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
          While searching for chart components with smooth animations and
          dynamic data visualizations, I realized there weren&apos;t many
          options available. So, I decided to build my own.
        </DocsDescription>
      </DocsContainer>
      <DocsParagraph>
        <WhiteSpan>Charts UI</WhiteSpan> is a library of chart components with
        smooth animations and dynamic data visualizations. It is built with
        React and Typescript.
      </DocsParagraph>
      <DocsParagraph>
        It is a collection of chart components with smooth animations and
        dynamic data transitions.
      </DocsParagraph>
      <DocsSubContainer>
        <DocsSubtitle title="Philosophy" />
        <DocsParagraph>
          I set out to create a library of{" "}
          <WhiteSpan>chart components</WhiteSpan> with smooth animations and
          dynamic data transitions. My goal was to make it easy to use, highly
          customizable, and accessible to everyone.
        </DocsParagraph>
        <DocsSubtitle title="Why Charts UI?" />
        <DocsParagraph>
          In today&apos;s web development landscape, creating engaging data
          visualizations is crucial for understanding complex information and
          making data-driven decisions. Charts UI empowers developers to enhance
          their applications with beautiful, animated chart components without
          requiring deep knowledge of data visualization techniques.
        </DocsParagraph>
        <DocsParagraph>
          Our library solves common challenges by providing:
        </DocsParagraph>
        <DocsParagraph>
          • Ready-to-use chart components with stunning animations
          <br />
          • Simple copy-paste implementation
          <br />
          • Seamless integration with modern frameworks
          <br />
          • Performance-optimized data rendering
          <br />• Customizable designs to match your brand
        </DocsParagraph>
        <DocsSubtitle title="Design Philosophy" />
        <DocsParagraph>
          We believe that exceptional data visualization and smooth animations
          can transform complex data into meaningful insights. By providing
          high-quality chart components, we enable developers to create
          intuitive data experiences that help users make better decisions.
        </DocsParagraph>
        <DocsParagraph>
          Built with modern web standards and inspired by leading UI libraries
          like shadcn/ui, Charts UI brings a new era of data visualization
          possibilities to your dashboards and applications.
        </DocsParagraph>
      </DocsSubContainer>
      <DocsSubContainer>
        <DocsParagraph>
          Our Chart Components are built with{" "}
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
