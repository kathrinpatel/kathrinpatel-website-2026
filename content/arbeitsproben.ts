export type WorkItem = {
  id: string;
  title: string;
  client: string;
  kind: string;
  downloads: { label: string; href: string }[];
};

export const workItems: WorkItem[] = [
  {
    id: "patel-portfolio",
    title: "PATEL PORTFOLIO",
    client: "patel kommunikative inszenierung",
    kind: "Aktuelle Arbeitsproben",
    downloads: [{ label: "PDF-Download", href: "http://downloads.patel-design.de/pat_portfolio.pdf" }],
  },

  // walls by patel I–V (V neu)
  {
    id: "wbp-i",
    title: "walls by patel I",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbp_kollektionsbuch.pdf" },
      { label: "Teaserbroschüre · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbp_teaserbroschuere.pdf" },
    ],
  },
  {
    id: "wbp-ii",
    title: "walls by patel II",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "http://downloads.patel-design.de/wbpII_kollektionsbuch.pdf" },
      { label: "Teaserbroschüre · PDF-Download", href: "http://downloads.patel-design.de/wbpII_teaserbroschuere.pdf" },
    ],
  },
  {
    id: "wbp-iii",
    title: "walls by patel III",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbpIII_kollektionsbuch.pdf" },
      { label: "Teaserbroschüre · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbpIII_teaserbroschuere.pdf" },
    ],
  },
  {
    id: "wbp-iv",
    title: "walls by patel IV",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbpIV_kollektionsbuch.pdf" },
      { label: "Teaserbroschüre · PDF-Download", href: "https://www.kathrinpatel.de/pdf/wbpIV_teaserbroschuere.pdf" },
    ],
  },
  {
    id: "wbp-v",
    title: "walls by patel V",
    client: "A.S. Création Tapeten AG",
    kind: "Kollektionsbuch",
    downloads: [
      { label: "Kollektionsbuch · PDF-Download", href: "http://downloads.patel-design.de/wbpV_kollektionsbuch_highres.pdf" },
      { label: "Teaserbroschüre · PDF-Download", href: "http://downloads.patel-design.de/wbpV_teaserbroschuere_highres.pdf" },
    ],
  },

  // Rest nach Arbeitsproben-PDF (werden im nächsten Schritt vervollständigt)
];
