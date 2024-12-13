import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to dashboard as candidate or employer",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="authentication-layout">{children}</div>;
}
