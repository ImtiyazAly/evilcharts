"use client";

import React from "react";
import {
  ApiTableHeader,
  ApiTableBody,
  ApiTable,
  ApiTableBodyDataProps,
} from "@/components/docs/layout/api-reference-table/api-table";
import {
  DocsSubContainer,
  DocsSubtitle,
  DocsParagraph,
} from "../../components/docs-typography";

const ApiReference = ({ data }: { data: ApiTableBodyDataProps }) => {
  return (
    <DocsSubContainer>
      <DocsSubtitle title="API Reference" />
      <DocsParagraph>
        The following table contains the API reference for the component.
      </DocsParagraph>
      <div className="mt-4 bg-border/40 p-1 rounded-[14px] group shadow">
        <ApiTable>
          <ApiTableHeader />
          <ApiTableBody data={data} />
        </ApiTable>
      </div>
    </DocsSubContainer>
  );
};

export default ApiReference;
