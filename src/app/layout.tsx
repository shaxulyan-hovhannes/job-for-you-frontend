import type { Metadata } from "next";
import "./../styles/main.scss";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

import { CustomThemeProvider } from "@/components/core/theme-provider/theme-provider";
import StoreProvider from "@/components/core/store-provider";
import IntlProvider from "@/components/core/intl-provider";
import UserProvider from "@/components/core/user-provider";

export const metadata: Metadata = {
  title: "Job For You",
  description: "Job search web service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <IntlProvider>
            <CustomThemeProvider>
              <UserProvider>
                <Header />
                {children}
                <Footer />
              </UserProvider>
            </CustomThemeProvider>
          </IntlProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
