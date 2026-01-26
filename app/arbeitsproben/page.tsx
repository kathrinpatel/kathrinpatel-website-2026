import { workItems } from "../../content/arbeitsproben";

export default function ArbeitsprobenPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ marginBottom: 48 }}>Arbeitsproben</h1>

      {workItems.map((item) => (
        <section
          key={item.id}
          style={{
            marginBottom: 56,
            paddingBottom: 24,
            borderBottom: "1px solid #ddd",
          }}
        >
          <strong style={{ fontSize: 18 }}>{item.title}</strong>
          <div>{item.client}</div>
          <div style={{ marginBottom: 12 }}>{item.kind}</div>

          {item.downloads?.length > 0 && (
            <ul style={{ paddingLeft: 18 }}>
              {item.downloads
                .filter((d) => d.href)
                .map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d.label}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
