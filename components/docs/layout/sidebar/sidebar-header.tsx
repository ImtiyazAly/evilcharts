import { SidebarHeader } from "@/components/ui/sidebar";
import React from "react";

const DocsSidebarHeader = () => {
  return (
    <SidebarHeader className="border-b border-dashed h-14 justify-center px-2">
      <div className="flex items-center gap-2 px-2">
        <span className="doto text-2xl font-black tracking-tighter">
          EvilCharts
        </span>
      </div>
    </SidebarHeader>
  );
};

export default DocsSidebarHeader;
