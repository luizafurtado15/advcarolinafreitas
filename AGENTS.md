<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Decisions

- The site is delivered to the client as a static export served by GitHub Pages on the custom domain carolinafreitas.adv.br; keep the Lovable preview only as the authoring environment. Why: the client hosts and owns the domain there and has no Lovable billing.
- The static export drops the React runtime and serves pre-rendered HTML with relative asset paths. Why: the landing page has no client-side interactivity, and the Lovable build config pins the server preset so a normal static build is not produced.
