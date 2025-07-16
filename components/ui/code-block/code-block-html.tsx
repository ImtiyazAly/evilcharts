"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const CodeBlockHtml = ({
  html,
  clickToViewMore,
}: {
  html: string;
  clickToViewMore: boolean;
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleViewMore = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="relative rounded-[14px] overflow-hidden">
      {clickToViewMore && !isHidden ? (
        <div
          onClick={handleViewMore}
          className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent"
        >
          <button className="w-full h-full flex items-center justify-center mt-14 shadow-md text-muted-foreground cursor-pointer hover:text-white">
            <span className="text-xs font-medium capitalize leading-none">
              View More
            </span>
          </button>
        </div>
      ) : null}
      <div
        className={cn(
          clickToViewMore && !isHidden ? "max-h-[400px]" : "max-h-auto",
          "text-sm overflow-y-hidden rounded-b-[14px] duration-300 dark:[&_pre]:!bg-white/7 [&_pre]:!bg-white"
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default CodeBlockHtml;
