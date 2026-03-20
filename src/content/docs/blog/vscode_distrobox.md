---
title: VSCode on distrobox might be viable
date: 2026-03-19
excerpt: From GNOME Builder to Devcontainers to Distrobox - finding a development setup that actually works on an immutable distro
---

Recently, I wanted to continue development on my application (which is private, for now!). Still new to Bluefin, I tried multiple approaches.

There was GNOME Builder, which works _very well_. But it's not a program I'm very fond of. GNOME's philosophy might as well be _"Make it hard to make it ugly"_, and it's great at that. Apps coming out of GTK 4 and LibAdwaita are pretty.
However, Libadwaita is very opinionated, and GNOME Builder suffers from that. I mean, it's not like anyone is writing software with a small android screen. Is it really necessary to have this much accessibility?

> GNOME Builder's most glaring problems are: no git, vim integration is funky, editing XML, and the interface doesn't quite cut it.

Okay, so GNOME Builder works wonders for building flatpaks, but I _personally_ don't like it. Then there's Visual Studio Code, and trying to use Flatpak SDKs has been nothing but a nightmare - it might work for you, but it certainly doesn't for me. If the vala developer userbase is already niche, imagine how few of us use Visual Studio Code.

That's when I thought: _“Why not use Devcontainers? Bluefin team likes [CNCF](https://www.cncf.io/), and they like devcontainers!”_. Grave mistake. Along that happy thought, I also wanted to work with Flatpak SDKs _inside a docker container_. Turns out that, no, that's not a good idea. Compatibility? What's that?

> I haven't been fair to Devcontainers, they deserve another shot. But that's for another time.

Since development had to be done with GNOME Builder, and my studies were ramping up, I needed a break.

During that time, I was messing around with Distrobox, and came to be less scared of it. Eventually, I just had to try: _what would happen if I try to run an entire IDE on distrobox?_

Turns out, that worked _very well_. So well in fact, that I'm here writing this blog post on how much of a lifesaver distrobox is.

---

**Isn't this just a way to go back to a regular, mutable, distro?** you may ask.

Yes, **that's why I like it**. Because by having development happen in "pet containers", the development packages won't conflict with system packages. Also, if you have multiple projects/frameworks, none of them will affect each other.

To be fair, distrobox uses regular docker/podman/lilipod under the hood. Which is why I _haven't thrown the flatpak SDKs at it yet_. But distrobox does some black magic to route my display and make **hardware acceleration work**. Yeah, you ~~heard~~ read right, [you can run games on it](https://www.mulle-kybernetik.com/weblog/2023/steam_in_distrobox.html) and there's even nvidia support with a simple `--nvidia` flag.

Oh, and there's more. Pretty much every file on the host is available to the pet container. Yup, it's that nice. Horrible for security, and perfect for development. Specially since the app I was making required acces.

So in the end, it's almost like a native application, except it's actually running on your distro of choice. You can even change it's home directory to something else. Sometimes the layer is so thin, that it's hard to distinguish what's possible and what isn't - even I don't have a clear picture of it yet.

---

**If all of that is possible through docker. Why not try that directly instead?**

There's a problem with docker. I don't know how to use devcontainers properly. I know how to boot me up a _Jellyfin_ server, but not how to use a devcontainer.json file. With distrobox, the transition was seamless. Everything worked right away. I only needed to install some basic packages. That's it. Got a working development box in minutes.

Distrobox isn't "scalable", or secure. And this approach **doesn't replace docker**, either. But what it is, is a great entry to Bluefin as a whole, without compromising on performance, and is hassle-free. Specially easy if you use a GUI like _Distroshelf_ or _BoxBuddy_.

---

A big part of why I think distrobox worked better than my shot at docker, was because I _didn't even bother with flatpak SDKs_. Writing this blog reminded me that most of the issues with docker were related to _flatpak_.

> One day devcontainers will rule them all, but until then...

<details>
<summary>Here's my configuration</summary>

1. I mostly used Distroshelf, with the image `ghcr.io/ublue-os/arch-toolbox:latest`.
2. Gave it a custom home directory
3. Install _visual studio code_
4. Install the necessary packages for development
5. Distroshelf to create a desktop entry (for vscode)
6. Main Menu to edit the desktop entry
7. Start coding!

</details>
