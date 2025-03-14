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
  DATABASE_WITH_REST_API_DEPENDENCIES,
  DATABASE_WITH_REST_API_SVG_FILE,
  DATABASE_WITH_REST_API_CSS_FILE,
  DATABASE_WITH_REST_API_UTIL_FILE,
  DATABASE_WITH_REST_API_BASIC_FILE,
} from "./snippets";
import { Step, StepContent, Steps } from "@/components/ui/steps";
import ApiReference from "@/components/docs/layout/api-reference-table/api-reference";
import DatabaseWithRestApi from "@/components/svg-components/database-with-rest-api";
import { databaseWithRestApiApiRefData } from "@/constants/apiRefData/database-with-rest-api";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Database With REST API" />
        <DocsDescription>
          Presentation of a Database with a REST API
        </DocsDescription>
      </DocsContainer>
      <CodePreviewTab>
        <PreviewTab>
          <div className="p-4 rounded-xl bg-accent/20 grid place-items-center">
            <DatabaseWithRestApi />
          </div>
        </PreviewTab>
        <CodeTab>
          <CodeBlock
            code={DATABASE_WITH_REST_API_BASIC_FILE}
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
                Install the dependencies for the Database With REST API
                component.
              </DocsParagraph>
              <CodeBlock
                code={DATABASE_WITH_REST_API_DEPENDENCIES}
                language="bash"
              />
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
                code={DATABASE_WITH_REST_API_UTIL_FILE}
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
                code={DATABASE_WITH_REST_API_CSS_FILE}
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
                code={DATABASE_WITH_REST_API_SVG_FILE}
                language="tsx"
                type="code"
                title="shadcn-ui.tsx"
                clickToViewMore
              />
            </StepContent>
          </Step>
        </Steps>
      </DocsContainer>
      <ApiReference data={databaseWithRestApiApiRefData} />
    </div>
  );
};
export default Page;
