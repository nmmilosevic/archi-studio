This folder is tracked so you know the convention.

Create a real folder at the project root named:

  local-only/

That folder is listed in .gitignore and will never be committed. Put there
anything you do not want on a public GitHub repo, for example:

- copies of .env or API keys (never commit the real secrets)
- personal notes, scratch files, large exports
- client-only assets or drafts
- local tooling caches you want outside the repo

After cloning, run: mkdir -p local-only
