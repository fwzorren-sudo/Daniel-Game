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
   - **Mash any key** → a cartoon dinosaur pops up with a **RAWR!** 🦕🦖🐉🐲🦎🐊
   - **Press a letter or number** → it also appears **HUGE** and colorful (sneaky early learning!)
   - **Click / tap anywhere** → confetti, eggs, stars, and hearts burst out 🎉🥚⭐❤️
   - **Friendly dinos walk across the screen** on their own — click one to make it jump and roar!

That's it. No installing, no internet needed — it even works offline.

## ✨ Things to try

- **🦕 Dino counter** (top-left): counts every dinosaur Daniel makes. How high can he go?
- **🎨 Color mode** (top-right button): tap it to turn on painting.
  - **Drag/swipe** anywhere to **finger-paint** rainbow trails. 🌈
  - **Tap a dinosaur** to splash it with a bright color!
  - Tap the 🎨 button again to turn it off and wipe the painting clean.
- **Different dino voices:** big dinos give a deep stompy roar, little ones do a
  cute baby chirp — every roar sounds a bit different.
- **Come-back surprises:** if Daniel wanders off, after a few quiet seconds the
  game starts doing things on its own — dinosaurs pop up, roamers call out, and
  little sparkles burst — to catch his eye again. (These auto-dinos don't add to
  his counter, and they still respect the mute button.)

## 🔊 Sound

- Roars and pops are built right in (no files to download).
- Tap the **speaker button** (🔊) in the top-right to mute or unmute.

## 👀 For grown-ups

- **Auto-tidy:** old dinosaurs gently fade away so the screen never gets too crowded.
- **Escape-proof:** the game fills the screen and swallows accidental key presses
  so a toddler can't easily click away or close things.
- **To quit fullscreen:** press **Esc**, then **Shift + Q**. (Or just close the
  browser tab.)
- Works great on a laptop *and* on a touchscreen tablet.

## 🛠️ Under the hood

A single self-contained HTML file — plain HTML5 Canvas + the Web Audio API,
**zero dependencies, zero build step**. All sounds are synthesized live in the
browser (no audio files). The confetti physics are modeled on the
[`canvas-confetti`](https://github.com/catdad/canvas-confetti) library
(origin / spread / velocity / gravity) but re-implemented inline so the file
stays completely offline-friendly.
