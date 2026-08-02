# 🦖 Daniel-saurus Rawr!

A super-simple dinosaur game for little kids who love to **mash the keyboard** and
**click the mouse** — and shout "RAWR!" 🦕

Made just for Daniel: there's no way to lose, no menus to get stuck in, and
every key and click does something fun.

## 🌐 Play online

Once GitHub Pages is enabled for this repo, the game is live at:
**https://fwzorren-sudo.github.io/Daniel-Game/** — just open that link on any
phone, tablet, or computer. No install needed.

**Install it like an app (optional):** open that link, then use your browser's
**"Add to Home Screen"** (or "Install"). It gets its own dino icon, launches
**full-screen** with no browser bars, and — thanks to a built-in service worker —
**keeps working even with no internet** after the first visit.

## ▶ How to play

1. Open **`index.html`** by double-clicking it (any web browser works —
   Chrome, Edge, Safari, Firefox).
2. You'll see the **Daniel-saurus Rawr!** title screen — tap the big **▶ Tap to Play!** button (or tap anywhere).
3. Let Daniel go wild:
   - **Mash any key** → a cartoon dinosaur pops up with a **RAWR!** and goes
     scooting off in its own direction. Nine full-color species covering every
     major family: T-rex, triceratops, stegosaurus, brontosaurus, velociraptor,
     ankylosaurus, spinosaurus, parasaurolophus, and pteranodon.
   - **Press a letter or number** → it also appears **HUGE** and colorful (sneaky early learning!)
   - **Click / tap anywhere** → a surprise burst: every tap picks a different
     style — classic confetti, a party-popper fountain, an expanding ring,
     fluttering streamers, floating bubbles, or a gold star-pop 🎉⭐🫧
   - **Friendly dinos walk across the screen** on their own. **Tap a dinosaur** and
     it **grows bigger** with a roar and a squeak — tap the **same one 3 times** and
     it **POPS** in a burst of confetti! Every tap scores a point.

That's it. No installing, no internet needed — it even works offline.

## ✨ Things to try

- **🦕 Dino counter** (top-left): ticks up for every dinosaur Daniel makes *and*
  every one he taps or clicks — keyboard, mouse, or touch all score. A 🏆 shows
  his **best-ever score**, saved between visits. How high can he go?
- **🥚 Egg matching game** (top-right egg button): the screen fills with dinosaur
  eggs — tap two to peek inside and **find the matching pairs!** A miss just flips
  them gently back (no way to lose). Clear the board for a starry celebration and
  a fresh set of eggs. Each pair scores a point, and every **5 cleared boards** the next deal adds **one more pair** (up to 6) — it gets trickier as he gets better! A grown-up slider sets the starting difficulty.
  Tap the egg button again to go back to smashing.
- **🔤 Letter hunt** (top-right abc button): a big letter appears and the game
  **says it out loud** — find it among four tiles by **tapping it or pressing the
  key on the keyboard!** Right answers bring a dino stampede; wrong guesses just
  wiggle. Every 5 in a row earns an extra celebration. (The matching tile is the
  same color as the big letter — a friendly hint.)
- **🎨 Color mode** (top-right button): tap it to turn on painting.
  - **Drag/swipe** anywhere to **finger-paint** rainbow trails. 🌈
  - **Tap a dinosaur** to shift its colors (a fun rainbow hue-shift)!
  - Tap the 🎨 button again to turn it off and wipe the painting clean.
- **Different dino voices:** real recorded roars grouped into voice families —
  the **T-Rex** and the **Spinosaurus** each get their own mighty roar, the big
  plant-eaters share a deep **bellow**, and the raptor & pteranodon **screech**.
  Each dino usually gives its short roar and *occasionally* lets out a longer
  one for a fun surprise.
- **Come-back surprises:** if Daniel wanders off, after a few quiet seconds the
  game starts doing things on its own — dinosaurs pop up, roamers call out, and
  little sparkles burst — to catch his eye again. (These auto-dinos don't add to
  his counter, and they still respect the mute button.)

## 🔊 Sound

- Roars *and* the little effects — pops, poofs, squeaks, whooshes and sparkly
  shimmers — are real recorded clips, embedded right in the file (nothing to
  download). It all works offline.
- Things you'll hear: every tap bursts confetti with a **matching sound** — a
  fountain *whooshes*, a star-pop *shimmers*, a ring *poofs*, bubbles *pop* — so
  the sound follows what you see. Boop a dino for a roar + cute **squeak**, and
  dinos **poof** as they fade.
- **🔔 Milestone chime:** every 100 dinosaurs, a happy chime rings out with a big
  confetti-and-sparkle celebration. How high can Daniel count?
- **Background music** plays a gentle looping theme that matches the scene —
  sunny, volcano, night, or snowy. Adjust it (or turn it off) in the grown-up menu.
- Tap the **speaker button** (🔊) in the top-right to mute or unmute everything.

## 👀 For grown-ups

### Hidden controls menu
Open it by **holding the bottom-right corner for about a second**, or pressing
**Ctrl + Shift + P** — both are hard for a toddler to trigger by accident.
Everything you change is saved automatically for next time.

- **Sliders:** Volume, Music volume, Surprise pace (Calm ↔ Lively), Dino size (Small ↔ Huge), On-screen dinos (Few ↔ Lots — turn it down if an older computer chugs), Starting pairs for the 🥚 game (a pair is added every 5 cleared boards, up to 6)
- **Background:** ☀️ Sunny · 🌋 Volcano · 🌙 Night · ❄️ Snowy (volcano has rising embers, snowy has falling snow) — **each scene has its own looping background music** that switches with the view
- **Toggles:** Sound effects, Background music, Big letters & numbers, Roaming dinos, Surprises when idle, Auto-change background (cycles the scene every ~40s), Speak letters aloud (the browser's voice says each letter — in smash mode and the letter hunt)
- **Buttons:** Reset count, Reset best (clears the 🏆 record), Fullscreen, Done

### Other niceties
- **Auto-tidy:** old dinosaurs gently fade away so the screen never gets too crowded.
- **Escape-proof:** the game fills the screen and swallows accidental key presses
  and clicks — browser menus (Alt, F10, Alt+letter), help/find/dev-tools keys,
  address-bar shortcuts, right-click, the Back button, mouse side-buttons, and
  drag-drop are all blocked. In fullscreen on Chrome/Edge it also uses Keyboard
  Lock to capture even Ctrl+W / Ctrl+T / the Windows key.
- **To quit fullscreen:** press **Esc**, then **Shift + Q** — or **press and
  HOLD Esc** (the browser's own escape hatch, always works).
- Works great on a laptop *and* on a touchscreen tablet.

## 🛠️ Under the hood

A single self-contained HTML file — plain HTML5 Canvas + the Web Audio API,
**zero dependencies, zero build step**. The dinosaurs are nine SVG sprites
(traced from freshly-generated, license-free art) embedded right in the file
and tinted with a canvas hue-shift for color mode. The roars are short recorded
clips embedded as base64 and decoded with the Web Audio API (grouped into voice
families, with a weighted short/long pick per press); the gameplay effects
(pops, poofs, squeaks, whooshes, shimmers) are recorded clips too — two
variants each, picked at random — with a synthesized pop as a first-press
fallback. Each scene also has its own looping background-music track (mono,
embedded), decoded on first use and cross-faded in when the scene changes. The
confetti physics are modeled on the
[`canvas-confetti`](https://github.com/catdad/canvas-confetti) library
(origin / spread / velocity / gravity) but re-implemented inline so the file
stays completely offline-friendly.
