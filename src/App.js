import "./App.css";
import { Login } from "./components/Login";
import { NavbarComp } from "./components/Navbar";
import bannerImg from "./assets/banner.png";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="container-fluid d-lg-flex align-items-center justify-content-center">
        <Login />
        <div className="col-lg-8 col-xxl-7 col-md-12 d-flex justify-content-center ">
          <img src={bannerImg} className="img-fluid " alt="..."></img>
        </div>
      </div>
    </div>
  );
}

export default App;
