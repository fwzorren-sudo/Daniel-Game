# 🦖 Daniel-saurus Rawr!

A super-simple dinosaur game for little kids who love to **mash the keyboard** and
**click the mouse** — and shout "RAWR!" 🦕

Made just for Daniel: there's no way to lose, no menus to get stuck in, and
every key and click does something fun.

## ▶ How to play

1. Open **`dino-rawr.html`** by double-clicking it (any web browser works —
   Chrome, Edge, Safari, Firefox).
2. Tap the big **▶ Tap to Play!** button.
3. Let Daniel go wild:
   - **Mash any key** → a cartoon dinosaur pops up with a **RAWR!** Nine full-color
     species covering every major family: T-rex, triceratops, stegosaurus,
     brontosaurus, velociraptor, ankylosaurus, spinosaurus, parasaurolophus, and
     pteranodon.
   - **Press a letter or number** → it also appears **HUGE** and colorful (sneaky early learning!)
   - **Click / tap anywhere** → confetti, eggs, stars, and hearts burst out 🎉🥚⭐❤️
   - **Friendly dinos walk across the screen** on their own — click one to make it jump and roar!

That's it. No installing, no internet needed — it even works offline.

## ✨ Things to try

- **🦕 Dino counter** (top-left): counts every dinosaur Daniel makes. How high can he go?
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
- Things you'll hear: tap empty space for a **pop** or **shimmer**, boop a dino
  for a cute **squeak**, dinos **poof** as they fade, and roamers **whoosh** in.
- **Background music** plays a gentle looping theme that matches the scene —
  sunny, volcano, night, or snowy. Adjust it (or turn it off) in the grown-up menu.
- Tap the **speaker button** (🔊) in the top-right to mute or unmute everything.

## 👀 For grown-ups

### Hidden controls menu
Open it by **holding the bottom-right corner for about a second**, or pressing
**Ctrl + Shift + P** — both are hard for a toddler to trigger by accident.
Everything you change is saved automatically for next time.

- **Sliders:** Volume, Music volume, Surprise pace (Calm ↔ Lively), Dino size (Small ↔ Huge)
- **Background:** ☀️ Sunny · 🌋 Volcano · 🌙 Night · ❄️ Snowy (volcano has rising embers, snowy has falling snow) — **each scene has its own looping background music** that switches with the view
- **Toggles:** Sound effects, Background music, Big letters & numbers, Roaming dinos, Surprises when idle
- **Buttons:** Reset count, Fullscreen, Done

### Other niceties
- **Auto-tidy:** old dinosaurs gently fade away so the screen never gets too crowded.
- **Escape-proof:** the game fills the screen and swallows accidental key presses
  so a toddler can't easily click away or close things.
- **To quit fullscreen:** press **Esc**, then **Shift + Q**. (Or just close the
  browser tab.)
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
