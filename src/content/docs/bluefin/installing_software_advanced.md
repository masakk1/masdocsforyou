---
title: Installing Apps on Bluefin
description: Installing apps on Bluefin for developers or advanced users
draft: true
sidebar:
  #   badge: "advanced"
  badge:
    text: "WIP"
    variant: "danger"
---

:::note
This guide is for _developers_ or _experienced_ Linux users.
If you aren't, checkout [this guide](/bluefin/installing_apps_beginner/) instead.
:::

If you haven't, read [official Developer Mode](https://docs.projectbluefin.io/bluefin-dx) documentation to get you started.

- Traditional package managers, like `dnf` or `apt` aren't available directly.
- **Flatpaks**
  - Is still the preferred method of installing applications
  - A lot of IDEs and developer tools can still be installed through Flatpak - unless they require deep system access.
    - Postman, GNOME Builder, DBeaver, all work great.
    - If you need IDEs from Jetbrains, use homebrew instead — `ujust install-jetbrains-toolbox`
  - If you're having file permission issues, use [Flatseal](https://flathub.org/en/apps/com.github.tchx84.Flatseal)
  - Use [Warehouse](https://flathub.org/en/apps/io.github.flattool.Warehouse) to manage (flatpak) snapshots, versions, and delete leftover data.
- **AppImage**s
  - It's still okay to use AppImages - _unless you are on Bluefin LTS_.
  - Usually, providers have _at least_ an `.rpm` or `.deb` file. This is where [Distrobox](https://distrobox.it) comes in - which has more support from Bluefin mantainers.
- **Homebrew**
  - TODO
- **Distrobox**
  - Creates tiny containers, where installed applications can be shown to the host system.
  - Use [Distroshelf](https://flathub.org/en/apps/com.ranfdev.DistroShelf) to manage your containers.
    - It can also create desktop icons to be able to search them.
- **Layering**
  - Only if you need to install drivers for laptops, VPN clients, or third party software
  - Bear in mind that _a lot of drivers are included by default_, so it's best to check before doing anything.
  - If you have to, checkout [the official documentation](https://docs.projectbluefin.io/administration#enabling-local-layering).
