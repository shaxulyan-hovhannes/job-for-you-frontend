import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employers",
  description: "Jobs list with filters, searching and sorting",
};

export default function EmployersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="filterable-list-layout">{children}</div>;
}
