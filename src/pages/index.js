// start in component
import HeaderHome from "../components/HeaderHome";
import About from "../components/about";
import Service from "../components/services";
import Catalogue from "../components/catalogue";
import Team from "../components/team";

function index() {
  return (
    <div>
      <HeaderHome />
      <About />
      <Service />
      <Catalogue />
      <Team />
    </div>
  );
}

export default index;
