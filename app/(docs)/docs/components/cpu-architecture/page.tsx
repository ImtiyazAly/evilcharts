import React from "react";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import {
  DocsCodeBadge,
  DocsContainer,
  DocsDescription,
  DocsLink,
  DocsParagraph,
  DocsSubtitle,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import {
  CodeTab,
  PreviewTab,
  CodePreviewTab,
} from "@/components/docs/layout/code-preview/code-preview";
import { CpuArchitecture } from "@/components/svg-components/cpu-architecture";
import { CodeBlock } from "@/components/ui/code-block/code-block";
import {
  CPU_ARCHITECTURE_DEPENDENCIES,
  CPU_ARCHITECTURE_SHINY_TEXT_FILE,
  CPU_ARCHITECTURE_SNIPPET,
  CPU_ARCHITECTURE_SVG_FILE,
  CPU_ARCHITECTURE_UTIL_FILE,
  CPU_ARCHITECTURE_CSS_FILE,
} from "./snippets";
import { Step, StepContent, Steps } from "@/components/ui/steps";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="CPU Architecture" />
        <DocsDescription>A simple CPU architecture animation</DocsDescription>
      </DocsContainer>
      <CodePreviewTab>
        <PreviewTab>
          <div className="p-4 rounded-xl bg-accent/20">
            <CpuArchitecture />
          </div>
        </PreviewTab>
        <CodeTab>
          <CodeBlock
            code={CPU_ARCHITECTURE_SNIPPET.BASIC}
            language="tsx"
            title="cpu-architecture.tsx"
            clickToViewMore
          />
        </CodeTab>
      </CodePreviewTab>
      <DocsContainer className="mt-6">
        <Steps>
          <Step>
            <DocsSubtitle title="Install Dependencies" withoutLink />
            <StepContent>
              <DocsParagraph>
                Install the dependencies for the CPU Architecture component.
              </DocsParagraph>
              <CodeBlock code={CPU_ARCHITECTURE_DEPENDENCIES} language="bash" />
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Add Util File" withoutLink />
            <StepContent>
              <DocsParagraph>
                Add a <DocsCodeBadge>lib/utils.ts</DocsCodeBadge> in your root
                directory.
              </DocsParagraph>
              <CodeBlock
                code={CPU_ARCHITECTURE_UTIL_FILE}
                language="ts"
                title="utils.ts"
              />
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Add Shiny Text Component" withoutLink />
            <StepContent>
              <DocsParagraph>
                Add a{" "}
                <DocsCodeBadge>components/ui/shiny-text.tsx</DocsCodeBadge>
                component in your components directory.
              </DocsParagraph>
              <CodeBlock
                code={CPU_ARCHITECTURE_SHINY_TEXT_FILE}
                language="bash"
              />
              <DocsParagraph>
                This component is provided by{" "}
                <DocsLink
                  href="https://magicui.design/docs/components/animated-shiny-text"
                  _blank
                >
                  Magic UI
                </DocsLink>
                .
              </DocsParagraph>
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Add CSS File" withoutLink />
            <StepContent>
              <DocsParagraph>
                Add css text in <DocsCodeBadge>globals.css</DocsCodeBadge> file.
              </DocsParagraph>
              <CodeBlock
                code={CPU_ARCHITECTURE_CSS_FILE}
                language="css"
                title="globals.css"
                clickToViewMore
              />
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Finally, Add SVG Component" withoutLink />
            <StepContent>
              <DocsParagraph>
                Add a{" "}
                <DocsCodeBadge>
                  components/ui/cpu-architecture.tsx
                </DocsCodeBadge>
                component in your components directory.
              </DocsParagraph>
              <CodeBlock
                code={CPU_ARCHITECTURE_SVG_FILE}
                language="tsx"
                title="cpu-architecture.tsx"
                clickToViewMore
              />
            </StepContent>
          </Step>
        </Steps>
      </DocsContainer>
    </div>
  );
};
export default Page;
