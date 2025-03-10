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
import { CodeBlock } from "@/components/ui/code-block/code-block";
import {
  SHADCN_UI_DEPENDENCIES,
  SHADCN_UI_SVG_FILE,
  SHADCN_UI_UTIL_FILE,
  SHADCN_UI_CSS_FILE,
  SHADCN_UI_BASIC_FILE,
  SHADCN_UI_INSTALL_SHIMMER_TEXT,
} from "./snippets";
import { Step, StepContent, Steps } from "@/components/ui/steps";
import ApiReference from "@/components/docs/layout/api-reference-table/api-reference";
import ShadCnUI from "@/components/svg-components/shadcn-ui";
import { shadcnUiApiRefData } from "@/constants/apiRefData/shadcn-ui";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Shadcn UI" />
        <DocsDescription>
          Installation design inspired by shadcn tweet
        </DocsDescription>
      </DocsContainer>
      <CodePreviewTab>
        <PreviewTab>
          <div className="p-4 rounded-xl bg-accent/20">
            <ShadCnUI />
          </div>
        </PreviewTab>
        <CodeTab>
          <CodeBlock
            code={SHADCN_UI_BASIC_FILE}
            language="tsx"
            title="page.tsx"
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
              <CodeBlock code={SHADCN_UI_DEPENDENCIES} language="bash" />
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
                code={SHADCN_UI_UTIL_FILE}
                language="ts"
                type="code"
                title="utils.ts"
              />
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Add Shimmer Text Animation" withoutLink />
            <StepContent>
              <DocsParagraph>
                Install Shimmer component from{" "}
                <DocsLink
                  _blank
                  href="https://motion-primitives.com/docs/text-shimmer"
                >
                  Motion Primitives
                </DocsLink>
              </DocsParagraph>
              <CodeBlock
                code={SHADCN_UI_INSTALL_SHIMMER_TEXT}
                language="bash"
                type="command"
              />
            </StepContent>
          </Step>
          <Step>
            <DocsSubtitle title="Add CSS Classes" withoutLink />
            <StepContent>
              <DocsParagraph>
                Add css classes in <DocsCodeBadge>globals.css</DocsCodeBadge>{" "}
                file.
              </DocsParagraph>
              <CodeBlock
                code={SHADCN_UI_CSS_FILE}
                language="css"
                type="css"
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
                  components/svg-components/shadcn-ui.tsx
                </DocsCodeBadge>
                component in your components directory.
              </DocsParagraph>
              <CodeBlock
                code={SHADCN_UI_SVG_FILE}
                language="tsx"
                type="code"
                title="shadcn-ui.tsx"
                clickToViewMore
              />
            </StepContent>
          </Step>
        </Steps>
      </DocsContainer>
      <ApiReference data={shadcnUiApiRefData} />
    </div>
  );
};
export default Page;
