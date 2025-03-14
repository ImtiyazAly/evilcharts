import React from "react";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import {
  DocsCodeBadge,
  DocsContainer,
  DocsDescription,
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
  GLOWING_KEYBOARD_DEPENDENCIES,
  GLOWING_KEYBOARD_UTIL_FILE,
  GLOWING_KEYBOARD_CSS_FILE,
  GLOWING_KEYBOARD_SVG_FILE,
  GLOWING_KEYBOARD_BASIC_FILE,
} from "./snippets";
import { Step, StepContent, Steps } from "@/components/ui/steps";
import ApiReference from "@/components/docs/layout/api-reference-table/api-reference";
import GlowingKeyboard from "@/components/svg-components/glowing-keyboard";
import { glowingKeyboardApiRefData } from "@/constants/apiRefData/glowing-keyboard";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Glowing Keyboard" />
        <DocsDescription>Keyboard which glows on hover</DocsDescription>
      </DocsContainer>
      <CodePreviewTab>
        <PreviewTab>
          <div className="p-4 rounded-xl bg-accent/20 flex sm:justify-end items-center overflow-hidden">
            <GlowingKeyboard
              glowColor="#FF2056"
              highlight={[
                {
                  startRow: 2,
                  startIndex: 1,
                  text: ["F", "O", "L", "L", "O", "W", "", "M", "E"],
                },
                {
                  startRow: 4,
                  startIndex: 2,
                  text: ["L", "E", "G", "I", "O", "N"],
                },
              ]}
            />
          </div>
        </PreviewTab>
        <CodeTab>
          <CodeBlock
            code={GLOWING_KEYBOARD_BASIC_FILE}
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
                Install the dependencies for the Glowing Keyboard component.
              </DocsParagraph>
              <CodeBlock code={GLOWING_KEYBOARD_DEPENDENCIES} language="bash" />
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
                code={GLOWING_KEYBOARD_UTIL_FILE}
                language="ts"
                type="code"
                title="utils.ts"
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
                code={GLOWING_KEYBOARD_CSS_FILE}
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
                  components/svg-components/glowing-keyboard.tsx
                </DocsCodeBadge>
                component in your components directory.
              </DocsParagraph>
              <CodeBlock
                code={GLOWING_KEYBOARD_SVG_FILE}
                language="tsx"
                type="code"
                title="glowing-keyboard.tsx"
                clickToViewMore
              />
            </StepContent>
          </Step>
        </Steps>
      </DocsContainer>
      <ApiReference data={glowingKeyboardApiRefData} />
    </div>
  );
};
export default Page;
