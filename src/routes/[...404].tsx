import { A } from "@solidjs/router";
import cs from './notFound.module.css'
export default function NotFound() {
  return (
    <main style={'display: flex; flex-direction: column; align-items: center; '}>
      <h1 class={cs.title}>
        Not Found
      </h1>
      <p style={'font-size: 35px; margin-top: 15px; color: black;'}>
        <A href="/"  class={cs.linkHome}>
          come back Home
        </A>
      </p>
    </main>
  );
}
