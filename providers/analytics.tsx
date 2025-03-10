import { OpenPanelComponent } from "@openpanel/nextjs";

const Analytics = () => {
  return (
    <>
      <OpenPanelComponent
        clientId="8a82926c-9579-42cb-bd11-af35516844ff"
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
        trackHashChanges={true}
      />
    </>
  );
};

export default Analytics;
