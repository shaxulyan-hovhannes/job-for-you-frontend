import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Sign up to the system as candidate or employer",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="authentication-layout">{children}</div>;
}
