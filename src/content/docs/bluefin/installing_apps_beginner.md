---
title: Installing Apps on Bluefin for dummies
description: Installing Apps on Bluefin for people who are just starting out
draft: true
sidebar:
  badge:
    text: "WIP"
    variant: "danger"
---

:::note
This is target towards newcomers to Linux in general. Not developers.
:::

- **Flatpaks**
  - The main way to install programs
  - They are available on the store: [Bazaar](https://flathub.org/en/apps/io.github.kolunmi.Bazaar)
- **AppImages**
  - Sometimes companies will ship an AppImage instead of a Flatpak.
  - There's usually at least a `.deb` or `.rpm` file, but you'd have to use [Distrobox](https://distrobox.it) for that
  - If [Distrobox](https://distrobox.it) seems complicated, you can use [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever) to install AppImages instead.
    :::caution
    App Images are not available in Bluefin LTS.
    :::

- **Homebrew**: Not recommended - unless a developer.
- **Distrobox**: Not recommended - unless a power user.
- **Layering**: Not recommended.
  - Only if you need to install drivers for laptops, VPN clients, or third party software
  - Bear in mind that _a lot of drivers are included by default_, so it's best to check before doing anything.
  - If you have to, contact your administrator. Or ask the community.
