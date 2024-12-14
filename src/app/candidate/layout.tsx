import type { Metadata } from "next";
import Link from "next/link";

import AuthGuard from "@/components/core/auth-guard";

export const metadata: Metadata = {
  title: "Candidate Account",
  description: "Authenticated Candidate Account",
};

export default function CandidateAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <div>
        <Link
          style={{
            border: "1px solid black",
            display: "block",
            padding: "30px",
          }}
          href={"/candidate/dashboard"}
        >
          D0
        </Link>
        <Link
          style={{
            border: "1px solid black",
            display: "block",
            padding: "30px",
          }}
          href={"/candidate/dashboard1"}
        >
          D1
        </Link>
        <Link
          style={{
            border: "1px solid black",
            display: "block",
            padding: "30px",
          }}
          href={"/candidate/dashboard2"}
        >
          D2
        </Link>
      </div>
      {children}
    </AuthGuard>
  );
}
