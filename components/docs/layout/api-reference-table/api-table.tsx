import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleInfo } from "@/assets/svgs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge, BadgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ApiTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Table className="text-xs !rounded-xl overflow-hidden">{children}</Table>
    </TooltipProvider>
  );
};

const ApiTableHeader = () => {
  return (
    <TableHeader className="bg-white/5">
      <TableRow className="border-none">
        <TableHead className="sm:w-[300px]">Prop</TableHead>
        <TableHead>Type</TableHead>
        <TableHead>Required</TableHead>
        <TableHead className="text-right">Default</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export interface ApiTableBodyProps {
  data: {
    prop: string;
    tip: string;
    required: boolean;
    type: string;
    typeColor?: BadgeVariants;
    typeTooltip?: string;
    default?: string | undefined;
    defaultTooltip?: string;
  }[];
}

export type ApiTableBodyDataProps = ApiTableBodyProps["data"];

export enum ApiTableBodyTypeColor {
  String = "blue",
  Boolean = "green",
  Number = "yellow",
  Object = "purple",
  Function = "red",
  Array = "teal",
  Null = "gray",
}

const ApiTableBody = ({ data = [] }: ApiTableBodyProps) => {
  return (
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.prop} className="border-[#17171A]">
          <TableCell className="font-medium">
            <span className="mr-1.5"> {item.prop}</span>
            <Tooltip>
              <TooltipTrigger>
                <CircleInfo className="mb-0.5 inline-block cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>{item.tip}</p>
              </TooltipContent>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Badge className="mr-1" variant="blue">
              {item.type}
            </Badge>
            {item.typeTooltip && (
              <Tooltip>
                <TooltipTrigger>
                  <CircleInfo className="mb-0.5 inline-block cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p
                    className={cn(
                      item.type === "object" && "jetbrains",
                      "text-xs"
                    )}
                  >
                    {item.typeTooltip}
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </TableCell>
          <TableCell>
            <Badge variant={item.required ? "green" : "red"}>
              {item.required ? "true" : "false"}
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <span className="mr-1.5">{item.default ? item.default : "-"}</span>
            {item.defaultTooltip && (
              <Tooltip>
                <TooltipTrigger>
                  <CircleInfo className="mb-0.5 inline-block cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p
                    className={cn(
                      item.type === "object" && "jetbrains",
                      "text-xs"
                    )}
                  >
                    {item.defaultTooltip}
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export { ApiTable, ApiTableHeader, ApiTableBody };
