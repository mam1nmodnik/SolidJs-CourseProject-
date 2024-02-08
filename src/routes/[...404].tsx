import { A } from "@solidjs/router";
import './notFound.css'

export default function NotFound() {
  return (
    <main class='block404'>
        <h1>
          Not Found
        </h1>
        <p >
          <A href="/"  class=''>
            come back Home
          </A>
        </p>
      
    </main>
  );
}
