import { workItems } from "../../content/arbeitsproben";

export default function ArbeitsprobenPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <h1>Arbeitsproben</h1>

      {workItems.map((item) => (
        <div key={item.id} style={{ marginBottom: 32 }}>
          <strong>{item.title}</strong>
          <br />
          {item.client}
          <br />
          {item.kind}

          {item.downloads && (
            <ul>
              {item.downloads.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </main>
  );
}
