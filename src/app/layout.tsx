import type { Metadata } from "next";
import StyledComponentsRegistry from '../lib/registry'
import { GlobalStyle } from "./globalStyles";

export const metadata: Metadata = {
  title: "Leitura",
  description: "Livraria Leitura",
};

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}