import { Button } from "@/components/ui/border-button";
import { SidebarHeader } from "@/components/ui/sidebar";
import React from "react";

const DocsSidebarHeader = () => {
  return (
    <SidebarHeader className="border-b border-dashed h-14 justify-center px-2">
      <div className="flex items-center gap-2 px-2">
        <span className="doto text-3xl font-black">SVG</span>
        <Button className="h-7 w-7 jetbrains text-sm" variant="ghost">
          UI
        </Button>
      </div>
    </SidebarHeader>
  );
};

export default DocsSidebarHeader;
