export type WorkItem = {
  id: string;
  title: string;
  client: string;
  kind: string;
  downloads: { label: string; href: string }[];
};

export const workItems: WorkItem[] = [
  {
    id: "freestyle",
    title: "FREESTILE",
    client: "OBJECT CARPET",
    kind: "Kollektionsbroschüre",
    downloads: [
      { label: "PDF-Download", href: "" },
      { label: "Leporello 1 · PDF-Download", href: "" },
      { label: "Leporello 2 · PDF-Download", href: "" },
    ],
  },
  {
    id: "pure-silk",
    title: "PURE SILK",
    client: "OBJECT CARPET MANUFAKTUR",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "pure-wool",
    title: "PURE WOOL",
    client: "OBJECT CARPET MANUFAKTUR",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "edition-silhouette",
    title: "EDITION SILHOUETTE",
    client: "OBJECT CARPET",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "patel-portfolio",
    title: "PATEL PORTFOLIO",
    client: "patel kommunikative inszenierung",
    kind: "Aktuelle Arbeitsproben",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "rugxstyle",
    title: "RUGXSTYLE",
    client: "OBJECT CARPET",
    kind: "Editionsbroschüre",
    downloads: [
      { label: "PDF-Download", href: "" },
      { label: "Leporello · PDF-Download", href: "" },
    ],
  },
  {
    id: "rugx-forum",
    title: "RUGX FORUM",
    client: "OBJECT CARPET",
    kind: "Inspirationsbuch",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "wbp-i",
    title: "walls by patel I",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "" },
      { label: "Teaserbroschüre · PDF-Download", href: "" },
    ],
  },
  {
    id: "wbp-ii",
    title: "walls by patel II",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "" },
      { label: "Teaserbroschüre · PDF-Download", href: "" },
    ],
  },
  {
    id: "wbp-iii",
    title: "walls by patel III",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "" },
      { label: "Teaserbroschüre · PDF-Download", href: "" },
    ],
  },
  {
    id: "wbp-iv",
    title: "walls by patel IV",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "" },
      { label: "Teaserbroschüre · PDF-Download", href: "" },
    ],
  },
  {
    id: "wbp-v",
    title: "walls by patel V",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      {
        label: "Kollektionsbuch · PDF-Download",
        href: "http://downloads.patel-design.de/wbpV_kollektionsbuch_highres.pdf",
      },
      {
        label: "Teaserbroschüre · PDF-Download",
        href: "http://downloads.patel-design.de/wbpV_teaserbroschuere_highres.pdf",
      },
    ],
  },
  {
    id: "duette-skyline",
    title: "Duette Skyline patel Edition",
    client: "JAB Systems",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "meridian-twin",
    title: "Meridian Twin patel Edition",
    client: "JAB Systems",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
  {
    id: "architects-universe",
    title: "architects’ universe",
    client: "A.S. Création Tapeten AG",
    kind: "Produktbroschüre",
    downloads: [{ label: "PDF-Download", href: "" }],
  },
];
