---
title: VSCode in Distrobox
description: Running VSCode with Distrobox using Distroshelf
---

This is my current configuration for running code in Vala, now that I'm on Bluefin.

Distrobox has an [official guide](https://distrobox.it/posts/integrate_vscode_distrobox/#from-distrobox).
This one focuses more on Distroshelf, a GUI for Distrobox.

> ##### Why?
>
> I needed to install development packages like `meson`, `gdb` and `vala-language-server` on my machine — Devcontainers are great
> and all, but Distrobox are more straight forward. Plus, the display just works, and same for files.

## Running VSCode inside of Distrobox

1. Create Distrobox in Distroshelf
   - Don't use customizes images, so we can better check for dependencies and such
   - Don't set a custom directory
   - I called it "valabox"
2. Upgrade container
   - By clicking the "Upgrade container" button on Distroshelf
3. Install VSCode
   - I prefer using the downloadable .rpm/.deb.
     - There's also ways to setup the repo, but this does it automatically
     - Unless you used arch, I can't help you there.
   - Use the "Install Package" button in the UI
   - Accept the prompt
   - The terminal will close when it's done - If it closes to soon, that might be an issue
     - A wrong package format (.deb instead of .rpm)
     - A wrong architecture (arm64 instead of x64)
   - I don't recommend exporting the app at this point - I have like 7 different VSCode installations at this point.
4. Open VSCode from the terminal
   - Go to the "Terminal" tab on Distroshelf
   - type `code`
5. Things to keep in mind:
   - Anything that requires access to the system, like docker/Devcontainers, requires a little more work.
     - To do that, you'll have to expose a binary from the host (main computer) to the guest (pet container or distrobox)
   - This will keep you configuration across installations, as well as your logged in accounts
