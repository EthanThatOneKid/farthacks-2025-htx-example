import { A, BODY, H1, P } from "@fartlabs/htx";

const html = (
  <BODY>
    <H1>Hello, World!</H1>
    <P>This is a paragraph.</P>
    <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>
  </BODY>
);

// deno --allow-write main.tsx
Deno.writeTextFileSync("index.html", html);
