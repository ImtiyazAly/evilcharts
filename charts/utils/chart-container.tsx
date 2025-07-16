import React from "react";

const DisplayChartContainer = ({
  count = 2,
  children,
}: {
  count?: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={
        {
          "--chart-count": count,
        } as React.CSSProperties
      }
      className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(var(--chart-count),minmax(0,1fr))]"
    >
      {children}
    </div>
  );
};

export default DisplayChartContainer;
