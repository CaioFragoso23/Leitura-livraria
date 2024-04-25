import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyle } from "./globalStyles";
import { eb_garamond } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Leitura",
  description: "Livraria Leitura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eb_garamond.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
