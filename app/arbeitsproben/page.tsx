import { workItems } from "../../content/arbeitsproben";

export default function ArbeitsprobenPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <h1>Arbeitsproben</h1>

      {workItems.map((w) => (
        <div key={w.id} style={{ marginBottom: 24 }}>
          <strong>{w.title}</strong><br />
          {w.client}<br />
          {w.kind}
        </div>
      ))}
    </main>
  );
}
