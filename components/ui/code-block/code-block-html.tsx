import React from "react";
import { cn } from "@/lib/utils";

const CodeBlockHtml = ({ html }: { html: string }) => {
  return (
    <div className="relative rounded-[14px]">
      <div
        className={cn(
          "text-sm rounded-b-[14px] duration-300 dark:[&_pre]:!bg-white/7 [&_pre]:!bg-white overflow-hidden"
        )}
      >
        <div
          className="h-[calc(100svh-260px)] overflow-scroll no-scroll-bar"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default CodeBlockHtml;
