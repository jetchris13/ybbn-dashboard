import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SpotterDashboard() {
  const [data, setData] = useState(null);

  const loadSample = () => {
    setData({
      highlights: ["Possible morning cargo heavy", "Emirates A380 arrival"],
      arrivals: [
        { time: "06:15", flight: "EK430", type: "A380" },
        { time: "07:05", flight: "SQ255", type: "A350" }
      ],
      departures: [
        { time: "16:45", flight: "EK431", type: "A380" }
      ],
      notes: ["Watch midday for bizjets", "Check radar for last-minute cargo"]
    });
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">YBBN Spotter Dashboard</h1>

      <Button onClick={loadSample}>Load Today’s Brief</Button>

      {data && (
        <>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🔥 Highlights</h2>
              <ul className="list-disc ml-5">
                {data.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🛬 Arrivals</h2>
              <ul>
                {data.arrivals.map((a, i) => (
                  <li key={i}>{a.time} — {a.flight} ({a.type})</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🛫 Departures</h2>
              <ul>
                {data.departures.map((d, i) => (
                  <li key={i}>{d.time} — {d.flight} ({d.type})</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">👀 Notes</h2>
              <ul className="list-disc ml-5">
                {data.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
