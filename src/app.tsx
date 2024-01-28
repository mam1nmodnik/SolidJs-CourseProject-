// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import HeaderBlock from "./components/Layouts/Header/HeaderBlock";
import Footer from "./components/Layouts/Footer/Footer";
import Nav from "./components/Layouts/Header/Nav";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="content__home">
          {
            props.location?.pathname === '/' 
              ? <HeaderBlock/> 
              : <Nav addClass={true}/>
          }
          <Suspense>{props.children}</Suspense>
          <Footer/>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
