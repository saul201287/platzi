import { IBM_Plex_Sans } from "next/font/google";
export const metadata = {
  title: "Platzi",
  description: "Platzi",
};
const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  styles: ["normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link
        rel="icon"
        sizes="192x192"
        href="//static.platzi.com/media/favicons/platzi_favicon.png"
      ></link>
      <title>Platzi</title>
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
