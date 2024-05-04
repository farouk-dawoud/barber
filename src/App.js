import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// start in pages
import Index from "./pages/index";
import Team from "./pages/teamPage";
import Prices from "./pages/prices";
import Contact from "./pages/contact";
import Photo from "./pages/photo";
// start in theme component
import theme from "./theme";
// start in component
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              element={
                <div>
                  <Navbar />
                  <div>
                    <Outlet />
                  </div>
                  <Footer />
                </div>
              }
            >
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/Prices" element={<Prices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/photo" element={<Photo />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
