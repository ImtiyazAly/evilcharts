import React from "react";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import {
  DocsContainer,
  DocsDescription,
  DocsLink,
  DocsParagraph,
  DocsSubtitle,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import { Steps, Step, StepContent } from "@/components/ui/steps";
import { CodeBlock } from "@/components/ui/code-block/code-block";
import {
  CODE_DOCS_LINKS,
  CODE_SNIPPETS,
} from "@/constants/docs/pre-requisites-code-snippets";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Libraries" />
        <DocsDescription>
          Here you can find the libraries that are required to use the
          components.
        </DocsDescription>
      </DocsContainer>
      <Steps>
        <InstallNextJsStep />
        <InstallShadcnUiStep />
      </Steps>
      <DocsContainer>
        <DocsDescription>
          That&apos;s all you need to get started.
        </DocsDescription>
      </DocsContainer>
    </div>
  );
};
export default Page;

const InstallNextJsStep = () => {
  return (
    <Step>
      <DocsSubtitle title="Install Next.js" withoutLink />
      <StepContent>
        <DocsParagraph>
          Install Next.js with{" "}
          <DocsLink href={CODE_DOCS_LINKS.INSTALL_NEXT_JS} _blank>
            create-next-app
          </DocsLink>
        </DocsParagraph>
        <CodeBlock
          language={CODE_SNIPPETS.INSTALL_NEXT_JS.language}
          code={CODE_SNIPPETS.INSTALL_NEXT_JS.code}
        />
        <DocsParagraph>
          You will then be asked the following prompts{" "}
          <DocsLink href={CODE_DOCS_LINKS.CONFIGURE_NEXT_JS_CLI} _blank>
            Next.js CLI
          </DocsLink>{" "}
          :
        </DocsParagraph>
        <CodeBlock
          language={CODE_SNIPPETS.CONFIGURE_NEXT_JS_CLI.language}
          code={CODE_SNIPPETS.CONFIGURE_NEXT_JS_CLI.code}
        />
        <DocsParagraph>
          Once you&apos;ve answered the prompts, a new project will be created
          with your chosen configuration.
        </DocsParagraph>
      </StepContent>
    </Step>
  );
};

const InstallShadcnUiStep = () => {
  return (
    <Step>
      <DocsSubtitle title="Install Shadcn UI" withoutLink />
      <StepContent>
        <DocsParagraph>
          Run the init command to create a new Next.js project or to setup an
          existing one{" "}
          <DocsLink href={CODE_DOCS_LINKS.INSTALL_SHADCN_UI} _blank>
            Shadcn UI Docs
          </DocsLink>
        </DocsParagraph>
        <CodeBlock
          language={CODE_SNIPPETS.INSTALL_SHADCN_UI.language}
          code={CODE_SNIPPETS.INSTALL_SHADCN_UI.code}
        />
      </StepContent>
    </Step>
  );
};
