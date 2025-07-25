"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ViewChartsComponent, { SelectedChart } from "./view-charts-component";

const options: SelectedChart[] = [
  "Bar Charts",
  "Animated Bar Charts",
  "Area Charts",
  "Line Charts",
  "Pie Charts",
];

export default function Home() {
  const [selectedOption, setSelectedOption] =
    useState<SelectedChart>("Bar Charts");

  return (
    <div className="relative flex ">
      <div className="min-h-[100svh] flex items-center mx-auto w-full max-w-4xl">
        <div className="flex flex-col gap-2 px-6 sm:px-0">
          {/* logo */}
          <div className="flex items-center gap-2">
            <span className="doto text-4xl font-black tracking-tighter">
              EvilCharts
              <span className="text-sm jetbrains text-muted-foreground/50 font-light ml-1.5">
                v1.0
              </span>
            </span>
          </div>
          {/* description */}
          <p className="text-muted-foreground text-sm max-w-md">
            Explore the world of charts with EvilCharts. Animated & Interactive
            charts for your next project.
          </p>

          <div className="flex flex-row gap-2 items-center mt-4">
            <Link href="/docs">
              <Button className="h-7 text-xs" variant="outline" size="sm">
                Get Started
              </Button>
            </Link>
            <Link
              href="https://github.com/legions-developer/evilcharts"
              target="_blank"
            >
              <Button variant="secondary" className={cn("h-7 cursor-pointer")}>
                <span className="text-xs">Star Github</span>
                <GitHubLogoIcon className="size-3" />
              </Button>
            </Link>
          </div>
          {/* options */}
          <div className="flex flex-col gap-2 mt-8">
            {options.map((option) => (
              <div
                key={option}
                className={cn(
                  "flex flex-row gap-1 items-center cursor-pointer transition-all duration-200 group",
                  selectedOption === option ? "opacity-100" : "opacity-40"
                )}
                onClick={() => setSelectedOption(option)}
              >
                <ChevronRight
                  strokeWidth={1}
                  className={cn(
                    "size-4",
                    selectedOption !== option &&
                      "group-hover:-translate-x-2 duration-200"
                  )}
                />
                <span className="doto font-black">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ViewChartsComponent selectedChart={selectedOption} />
    </div>
  );
}
