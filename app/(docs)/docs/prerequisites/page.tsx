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
        <InstallRechartsStep />
        <InstallShadcnUiStep />
        <InstallShadcnUiComponentsStep />
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

const InstallRechartsStep = () => {
  return (
    <Step>
      <DocsSubtitle title="Install Recharts" withoutLink />
      <StepContent>
        <DocsParagraph>
          Install Recharts by running the following command{" "}
          <DocsLink href={CODE_DOCS_LINKS.INSTALL_RECHARTS} _blank>
            Recharts Docs
          </DocsLink>
        </DocsParagraph>
        <CodeBlock
          language={CODE_SNIPPETS.INSTALL_RECHARTS.language}
          code={CODE_SNIPPETS.INSTALL_RECHARTS.code}
          heightAuto={true}
        />
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
          heightAuto={true}
        />
      </StepContent>
    </Step>
  );
};

const InstallShadcnUiComponentsStep = () => {
  return (
    <Step>
      <DocsSubtitle title="Add Components" withoutLink />
      <StepContent>
        <DocsParagraph>
          Add the required components to your project by running the following
          command:
        </DocsParagraph>
        <CodeBlock
          language={CODE_SNIPPETS.ADD_COMPONENTS.language}
          code={CODE_SNIPPETS.ADD_COMPONENTS.code}
          heightAuto={true}
        />
      </StepContent>
    </Step>
  );
};
