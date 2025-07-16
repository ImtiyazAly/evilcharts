import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/code-block/copy-button";
import React from "react";
import { ChartCodeSheet } from "./chart-code-sheet";
import { cn } from "@/lib/utils";

interface ChartDisplayProps {
  name: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

const ChartDisplay = ({
  name,
  code,
  children,
  className,
}: ChartDisplayProps) => {
  return (
    <div
      className={cn(
        "bg-border/40 p-1 rounded-[14px] group dark:shadow-md",
        className
      )}
    >
      <div className="pb-1.5 py-1 pl-3 pr-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium leading-none">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton code={code} />
          <ChartCodeSheet code={code}>
            <Button variant="outline" className="text-[10px] h-6 px-2">
              Code
            </Button>
          </ChartCodeSheet>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ChartDisplay;
