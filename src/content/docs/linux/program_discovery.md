---
title: Awesome linux programs
description: List of interesting linux programs to discover
---

This is a list of _awesome_ Linux programs you might not know. It's not an exhaustive list, but they are all worth a shot!

:::note[Before you continue]
Most programs here work best with GNOME and x64. Particularly, [Bluefin](https://projectbluefin.io/)!
:::

:::caution[What does UNTESTED mean?]
It means that I haven't personally tested it.\
I cannot confirm it'll work well under Bluefin.

The application might still be function. Github Stars often indicate how many people use it.
:::

## Package Management & Flatpaks

- [Bazaar](https://github.com/kolunmi/bazaar) - Install flatpaks. **The default on Bluefin**.
- [Flatseal](https://github.com/tchx84/Flatseal) - Manage flatpak permissions.
- [Warehouse](https://github.com/flattool/warehouse) - Manage flatpak applications.

## Networking & File Sharing

- [RQuickShare](https://henriqueclaranhan.github.io/rquickshare/) (AppImage) - Good file sharing utility. Installed by default on Android
- [Spider](https://github.com/Zaedus/spider) - Create PWA. Install websites as an application.

## Gaming

- [Proton Plus](https://github.com/Vysp3r/ProtonPlus) - Compatibility tool (proton) manager.
- [Faugus launcher](https://github.com/Faugus/faugus-launcher) - Game launcher, with support for many propietary launchers.

## Development

- [Devpods](https://devpod.sh/) - Codespaces but local - Runs VSCode and IDEA IDEs.

## Containers & Virtualization

:::tip
Check the official documentation for Bluefin for developers first: https://docs.projectbluefin.io/devcontainers/
:::

- [Distrobox](https://distrobox.it/) - Use any distribution in your terminal. Share all of your host resources with containers.
- [Distroshelf](https://github.com/ranfdev/DistroShelf) - GUI for distrobox.

## 3D & Design

- [Exhibit](https://github.com/Nokse22/Exhibit) - 3D model viewer, in GNOME style.

## System Monitoring & Hardware

- [btop++](https://github.com/aristocratos/btop) - htop on steroids, with GPU support.
- [Mission centre](https://missioncenter.io/) - Window's task manager, in GNOME style.
- [OCCT](https://www.ocbase.com/occt) - Freemium, benchmarking, stability testing, and system monitor. Has Linux support.
- [LACT](https://github.com/ilya-zlobintsev/LACT) - Overclocking for GPUs. Should work for all vendors, but better check.

## Audio & Sound

- [JamesDSP](https://github.com/Audio4Linux/JDSP4Linux) - Great for EQ, and audio effects. Best one for Bluefin.
- [EasyEffects](https://github.com/wwmm/easyeffects) - Great for audio effects. Works with input and output sources (mics!). **Poor compatibility with Bluefin. Check JamesDSP**.

## Photography & Image Editing

- [Gradia](https://gradia.alexandervanhee.be/) - Screenshot editor tool for GNOME. Basically KDE’s spectacle for GNOME.

## Video Editing & Visual Effects

- [Kdenlive](https://kdenlive.org/) (UNTESTED) - Video editor for KDE, [apparently its good?](https://youtu.be/9dIqJDy78TI?si=nRrlQM_lB6pQ3Epk).
- [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) - Professional-grade video editor. Free version requires ffmpeg fuckery. **Check DavinciBox for proper compatibility on Bluefin**.
- [Davincibox](https://github.com/zelikos/davincibox) - Easily run davinci with _distrobox_.
- [Natron](https://natrongithub.github.io/) (UNTESTED) - AfterEffects alternative, [seems worth a shot](https://www.youtube.com/watch?v=ZNu_mx3ojs8)
