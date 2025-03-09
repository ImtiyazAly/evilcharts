import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import SquareCode from "@/assets/svgs/SquareCode";
import CopyButton from "@/components/ui/code-block/copy-button";
import CodeBlockHtml from "@/components/ui/code-block/code-block-html";

interface CodeBlockProps {
  language: BundledLanguage;
  code: string;
  clickToViewMore?: boolean;
  maxHeight?: number;
}

const CodeBlock = async ({
  language,
  code,
  clickToViewMore = false,
  maxHeight = 300,
}: CodeBlockProps) => {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "material-theme-darker",
  });

  return (
    <div className="bg-border/40 p-1 rounded-[14px] group shadow">
      <div className="pb-2 py-1 px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SquareCode />
          <span className="text-xs text-muted-foreground font-medium capitalize leading-none">
            {language}
          </span>
        </div>
        <CopyButton code={code} />
      </div>
      <CodeBlockHtml
        html={html}
        clickToViewMore={clickToViewMore}
        maxHeight={maxHeight}    
      />
    </div>
  );
};

export { CodeBlock };
