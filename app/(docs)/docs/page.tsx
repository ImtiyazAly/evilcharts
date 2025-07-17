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
        <DocsSubtitle title="Why i named it EvilCharts?" />
        <DocsParagraph>
          I named this library <WhiteSpan>EvilCharts</WhiteSpan> because
          it&apos;s based on my inspiration{" "}
          <DocsLink href="https://x.com/evilrabbit_" _blank>
            @Evil Rabbit
          </DocsLink>{" "}
          which is why I chose the name EvilCharts.
        </DocsParagraph>
        <DocsSubtitle title="Design Philosophy" />
        <DocsParagraph>
          As i wanted to create it as plug and plan not a seprate library so i
          used shadcn design system. so it will be easy to use and integrate
          with your project.
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
