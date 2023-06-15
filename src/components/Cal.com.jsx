import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalComComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <Cal
      calLink="bazco/15min"
      style={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
        marginTop: "8px",
      }}
    />
  );
}
