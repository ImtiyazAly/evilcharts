import React from "react";
import { cn } from "@/lib/utils";

const CodeBlockHtml = ({
  html,
  heightAuto,
}: {
  html: string;
  heightAuto?: boolean;
}) => {
  return (
    <div className="relative rounded-[14px]">
      <div
        className={cn(
          "text-sm rounded-b-[14px] duration-300 dark:[&_pre]:!bg-white/7 [&_pre]:!bg-white overflow-hidden"
        )}
      >
        <div
          className={cn(
            "overflow-scroll no-scroll-bar",
            heightAuto ? "h-auto" : "h-[calc(100svh-260px)]"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default CodeBlockHtml;
