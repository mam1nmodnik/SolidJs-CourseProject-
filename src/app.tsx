// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <NavMenu/>
          <Suspense>{props.children}</Suspense>
          <Footer/>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
