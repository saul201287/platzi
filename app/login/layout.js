export const metadata = {
  title: "Inicio de sesion",
  description: "Inicio de sesion",
};

export default function RootLogin({ children }) {
  return (
    <html lang="es">
      <link
        rel="icon"
        sizes="192x192"
        href="//static.platzi.com/media/favicons/platzi_favicon.png"
      ></link>
      <body>{children}</body>
    </html>
  );
}
