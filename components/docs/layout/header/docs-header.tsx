import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button as BorderButton } from "@/components/ui/border-button";
import { cn } from "@/lib/utils";
import { Lightbulb3 } from "@/assets/svgs";
import Link from "next/link";

const DocsHeader = () => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-dashed px-4 sticky top-0 bg-background z-50">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <BorderButton
          variant="ghost"
          size="icon"
          className={cn("h-7 w-7 cursor-pointer")}
        >
          <Lightbulb3 />
        </BorderButton>
        <Link href="https://legions.dev" target="_blank">
          <BorderButton variant="ghost" className={cn("h-7 cursor-pointer")}>
            <span className="text-xs">Creator</span>
          </BorderButton>
        </Link>
      </div>
    </header>
  );
};

export default DocsHeader;
