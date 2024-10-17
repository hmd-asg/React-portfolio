import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Page from "./components/Page";
import { Outlet, useLocation } from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
