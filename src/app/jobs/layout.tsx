import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Jobs list with filters, searching and sorting",
};

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="filterable-list-layout">{children}</div>;
}
