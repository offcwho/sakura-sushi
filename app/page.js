import Welcome from "./components/welcome";
import About from "./components/about";
import Menu from "./components/menu";
import Reviews from "./components/reviews";
import Reservation from "./components/reservation";

export default function Home() {
  return (
      <main className="application__main main">
        <Welcome/>
        <Menu/>
        <Reservation/>
        <About/>
        <Reviews/>
      </main>
  );
}
