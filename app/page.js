'use client'

import Welcome from "./components/welcome";
import About from "./components/about";
import Menu from "./components/menu";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({ stepSize: 15 })

export default function Home() {
  return (
      <main>
        <Welcome/>
        <Menu/>
        <About/>
      </main>
  );
}
