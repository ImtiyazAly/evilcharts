import { BundledLanguage } from "shiki";

interface SnippetProps {
  code: string;
  language: BundledLanguage;
}

interface CodeSnippetProps {
  INSTALL_NEXT_JS: SnippetProps;
  CONFIGURE_NEXT_JS_CLI: SnippetProps;
  CONFIGURE_TAILWIND_CSS: SnippetProps;
  INSTALL_SHADCN_UI: SnippetProps;
}

export const CODE_DOCS_LINKS = {
  INSTALL_NEXT_JS:
    "https://nextjs.org/docs/app/api-reference/cli/create-next-app",
  CONFIGURE_NEXT_JS_CLI:
    "https://nextjs.org/docs/app/api-reference/cli/create-next-app#with-the-default-template",
  INSTALL_TAILWIND_CSS:
    "https://tailwindcss.com/docs/installation/framework-guides/nextjs",
  INSTALL_SHADCN_UI: "https://ui.shadcn.com/docs/installation/next",
};

export const CODE_SNIPPETS: CodeSnippetProps = {
  INSTALL_NEXT_JS: {
    code: `npx create-next-app@latest`,
    language: "bash",
  },
  CONFIGURE_NEXT_JS_CLI: {
    code: `What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
`,
    language: "bash",
  },
  CONFIGURE_TAILWIND_CSS: {
    code: `cd my-project
npm install tailwindcss @tailwindcss/postcss postcss
`,
    language: "bash",
  },
  INSTALL_SHADCN_UI: {
    code: `npx shadcn@latest init`,
    language: "bash",
  },
};
