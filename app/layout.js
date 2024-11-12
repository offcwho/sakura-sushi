import "./scss/main.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { montserrat } from "./components/font";

import "./output.css"

export const metadata = {
  title: "Ресторан - Sakura Sushi",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      <body className={`${montserrat.className} application`}>
          <Header/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}