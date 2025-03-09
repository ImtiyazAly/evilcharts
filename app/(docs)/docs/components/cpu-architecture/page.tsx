import React from "react";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import {
  DocsContainer,
  DocsDescription,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import {
  CodeTab,
  PreviewTab,
  CodePreviewTab,
} from "@/components/docs/layout/code-preview/code-preview";
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
          <div>Preview</div>
        </PreviewTab>
        <CodeTab>
          <div>Code</div>
        </CodeTab>
      </CodePreviewTab>
    </div>
  );
};
export default Page;
