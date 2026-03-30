import { useState } from "react";

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
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>YBBN Spotter Dashboard</h1>
      <button onClick={loadSample} style={{ margin: '1rem 0', padding: '0.5rem 1rem' }}>Load Today’s Brief</button>

      {data && (
        <>
          <section style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🔥 Highlights</h2>
            <ul>{data.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
          </section>

          <section style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🛬 Arrivals</h2>
            <ul>{data.arrivals.map((a, i) => <li key={i}>{a.time} — {a.flight} ({a.type})</li>)}</ul>
          </section>

          <section style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🛫 Departures</h2>
            <ul>{data.departures.map((d, i) => <li key={i}>{d.time} — {d.flight} ({d.type})</li>)}</ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>👀 Notes</h2>
            <ul>{data.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
          </section>
        </>
      )}
    </div>
  );
}
