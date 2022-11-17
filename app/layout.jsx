import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="mb-16">
          <NavBar></NavBar>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
