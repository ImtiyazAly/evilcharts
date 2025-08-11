import DisplayChartContainer from "@/charts/utils/chart-container";
import ChartDisplay from "@/charts/utils/chart-display";
import {
  DocsContainer,
  DocsDescription,
  DocsTitle,
} from "@/components/docs/components/docs-typography";
import { GenerateBreadcrumb } from "@/components/ui/generate-breadcrumb";
import React from "react";
import { ClippedAreaChart } from "@/charts/animated-area-charts/clipped-area-chart";
// jsons
import ClippedAreaChartJson from "@/public/chart/clipped-area-chart.json";

const Page = () => {
  return (
    <div className="page">
      <GenerateBreadcrumb />
      <DocsContainer>
        <DocsTitle title="Animated Area Charts" />
        <DocsDescription>
          Interactive area charts with animated transitions. Hover on charts to
          interact with them.
        </DocsDescription>
      </DocsContainer>
      <DisplayChartContainer>
        <ChartDisplay
          name="Target Line Area Chart"
          jsonContent={ClippedAreaChartJson}
          className="col-span-2"
        >
          <ClippedAreaChart />
        </ChartDisplay>
      </DisplayChartContainer>
    </div>
  );
};

export default Page;
