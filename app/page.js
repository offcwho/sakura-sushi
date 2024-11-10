import Welcome from "./components/welcome";
import About from "./components/about";
import Menu from "./components/menu";
import Reviews from "./components/reviews";

export default function Home() {
  return (
      <main className="application__main main">
        <Welcome/>
        <Menu/>
        <About/>
        <Reviews/>
      </main>
  );
}
