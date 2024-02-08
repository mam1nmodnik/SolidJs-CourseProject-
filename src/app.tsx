// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import {  Suspense } from "solid-js";
import "./app.css";
import HeaderBlock from "./components/Layouts/Header/HeaderBlockMain";
import Footer from "./components/Layouts/Footer/Footer";
import Nav from "./components/Layouts/Header/Nav";
import Loading from "./components/Widgets/Loading/Loading";
import MobileNav from "./components/Layouts/Header/MobileNav";
import GlobalHeader from "./components/Layouts/Header/GlobalHeader";
import GlobalFooter from "./components/Layouts/Footer/GlobalFooter";

export default function App() {
  return(
    <Router
      root={(props) => (
        <div>
          <GlobalHeader props={props}/>
          <Suspense fallback={Loading()}>
            {props.children}
          </Suspense>
          <GlobalFooter props={props}/>
        </div>
      )}
    >
      <FileRoutes/>
    </Router>
  );
}
