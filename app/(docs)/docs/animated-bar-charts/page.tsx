import DisplayChartContainer from "@/charts/utils/chart-container";
import ChartDisplay from "@/charts/utils/chart-display";
import {
  DocsContainer,
  DocsDescription,
  DocsHint,
  DocsLink,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import React from "react";
import { MonochromeBarChart } from "@/charts/animated-bar-charts/monochrome-bar-chart";
import { ValueLineBarChart } from "@/charts/animated-bar-charts/value-line-bar-chart";
// jsons
import MonochromeBarChartJson from "@/public/chart/monochrome-bar-chart.json";
import ValueLineBarChartJson from "@/public/chart/value-line-bar-chart.json";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Animated Bar Charts" />
        <DocsDescription>
          Interactive bar charts with animated transitions. Hover on charts to
          interact with them.
        </DocsDescription>
      </DocsContainer>
      <DisplayChartContainer>
        <ChartDisplay
          name="Monospace Bar Chart"
          jsonContent={MonochromeBarChartJson}
        >
          <MonochromeBarChart />
        </ChartDisplay>
        <ChartDisplay
          name="Value Line Bar Chart"
          jsonContent={ValueLineBarChartJson}
        >
          <ValueLineBarChart />
        </ChartDisplay>
      </DisplayChartContainer>
      <DocsHint>
        Thanks to{" "}
        <DocsLink href="https://x.com/jshguo" _blank>
          Joshua Guo
        </DocsLink>{" "}
        to create the monospace bar chart design.
      </DocsHint>
    </div>
  );
};

export default Page;
