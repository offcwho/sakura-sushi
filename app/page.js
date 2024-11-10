import Welcome from "./components/welcome";
import About from "./components/about";
import Menu from "./components/menu";

export default function Home() {
  return (
      <main>
        <Welcome/>
        <Menu/>
        <About/>
      </main>
  );
}
