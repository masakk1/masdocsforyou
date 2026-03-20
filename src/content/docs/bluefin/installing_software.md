---
title: Installing software
description: Every method of installing software, and when to use each.
---

## Basic concepts

Feel free to skip this if you know about them!

### Immutability

Bluefin is **immutable** by design. You can't install software _directly_ as you would with a regular _mutable_ distro. Which is where Flatpak, Homebrew, and distrobox come in. These alternatives won't actually alter the base system.

TODO: link a source explaining it.

TODO: link a source explaining why this is good.

### Package managers & Stores

A package manager helps you install packages easily, without hunting for downloads online. Traditional ones like `apt` or `pacman` work by modifying the system directly, which isn't possible on Bluefin.

We'll be looking at altenatives to these package managers here. Or at least different ways to use them.

Think of it like Android: there's a trusted store (like Google Play), and then there's "sideloading" — installing software manually from a file. Linux works similarly, and we'll be looking at both.

:::tip
Unlike the Microsoft Store, the stores on Linux land aren't just usable, but the **best way to install software**.
:::

## When should I use each?

There are many options in Bluefin. It's better to check [Available options](#available-options) when in doubt.
There isn't a clear "order", that's something you'll decide.

Here's a quick summary of this guide:

1. [Flatpak](#flatpak) whenever possible - use [Bazaar](https://flathub.org/en/apps/io.github.kolunmi.Bazaar)
2. [Homebrew](#homebrew) for individual terminal utilities
3. [AppImage](#appimage)s are portable apps - use [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever)
4. [Distrobox](#distrobox) for quick containers and traditional package managers
5. [Layering](#layering), avoid whenever possible - only for drivers, VPNs, third party software

## Available options

Don't be overwhelmed by the many options there are. Each one will suit everyone differently.

### Flatpak

Flatpaks are the **main way to install programs**. These are **sandboxed**.

<details>
<summary>Sandboxing</summary>
 Sandboxed means the app runs in its own little bubble. It can't see your system files, other apps, or anything you haven't explicitly allowed. Think of it like a guest user on your computer: limited access by design.
</details>

#### Resources

- [Flatpak](https://docs.flatpak.org/en/latest/introduction.html#) - The technology that allows installing sandboxed apps.
- [Flathub](https://flathub.org/en) - The _store_, where all the flatpak applications are in.
- [Bazaar](https://flathub.org/en/apps/io.github.kolunmi.Bazaar) - The current application in Bluefin to install other software. Though it may change in the future.

#### When?

- Great for GUI apps
- Bad for CLI tools - It was designed for graphical apps, not terminal utilities
- Accessing your files freely - sandboxing means apps sometimes can't see parts of your system without extra permission
- Apps that need deep system access - IDEs, development tools, system utilities

:::tip[A common problem with Flatpaks is _permissions_]
You can use tools like [Flatseal](https://flathub.org/en/apps/com.github.tchx84.Flatseal) to change its file access permissions.

**If you trust the app**: in Flatseal, select an app > Filesystem > Check All user files.
:::

### Homebrew

Homebrew is a familiar, cross-flatform, terminal package manager. Mostly oriented towards _developer_ use. Available primarily for MacOS, and with growing support for Linux.

Bluefin has some development-focused, and miscellaneous packages available through `ujust`

```bash
ujust bbrew
```

:::tip
Bluefin includes `bbrew`, a TUI for `homebrew`
:::

#### When?

- The app isn't available on [Flatpak](#flatpak)
- You need software with more permissions than [Flatpak](#flatpak)
- Terminal utilities or developer tools
- Experimental software is only available through the [experimental tap](https://docs.projectbluefin.io/reports)

### AppImage

AppImages are bundled programs that can be ran portably. They are generally not supported by Bluefin. There aren't any store for these, they are provided by developers.

You can add them as desktop applications using [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever)

:::note
Just because they are discouraged, it doesn't mean there's anything wrong in using them.
:::
:::caution
Bluefin LTS **[has no support for AppImages](https://docs.projectbluefin.io/lts#differences-from-bluefin)**.
:::

#### When?

- You don't [want to mess with distrobox](#distrobox)
- There is no [Flatpak](#flatpak) available

### Distrobox

[Distrobox](https://distrobox.it) is a fancy wrapper around podman, docker, or lilipod to create and start containers highly integrated with the hosts. It can run any distribution you like, and handles the display routing, and file access.

It's a great fallback option if packages you need aren't readily available through [Homebrew](#homebrew). Or [Devcontainers](https://docs.projectbluefin.io/devcontainers) are hard to setup for niche technologies.

> Checkout [my blog post](https://guides.ohmyiris.win/blog/vscode_distrobox/) if you're interested in what Distrobox can do.

#### When?

- Development packages in [Homebrew](#homebrew) are _complicated_, or not readily available
- An app is _exclusively_ available as a system package (such as [Davinci Resolve](https://github.com/zelikos/davincibox)) or repositories like the [AUR](https://aur.archlinux.org/)
- Want to quickly run a GPU demanding application on a container
- Don't want to mess with [Containers](#containers) or [Devcontainers](https://docs.projectbluefin.io/devcontainers)
- You like using _traditional system package managers_ like `apt` or `dnf`
- You don't need to run a VSCode server off it - It doesn't work well as a devcontainer.
  - although you could [run vscode inside it](https://guides.ohmyiris.win/blog/vscode_distrobox/)

### Other options

#### Layering

Layering means adding individual packages onto the system. Generally speaking, this goes against Bluefin's pattern.

However, sometimes certain _necessary_ applications need to be installed as a system package. These include: laptop drivers, VPN clients, or third party software.

Read [the official documentation](https://docs.projectbluefin.io/lts#differences-from-bluefin) for more information.

#### Containers

Containers are tiny virtualized machines. Unless you are a developer or system administrator, these are of no use to you.

:::note[Are you a developer?]
If you didn't already know, Devcontainers is **_the_ technology** that Bluefin most strives for. Checkout [Devcontainers on the Bluefin documentation](https://docs.projectbluefin.io/devcontainers) for more information.
:::
