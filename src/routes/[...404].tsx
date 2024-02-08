import { A } from "@solidjs/router";
import './notFound.css'

export default function NotFound() {
  return (
    <main >
        <h1 class="text__error">
          404 page not found
        </h1>
        <p class="text__link">
          <A href="/"  class=''>
            click here to go home
          </A>
        </p>
    </main>
  );
}
