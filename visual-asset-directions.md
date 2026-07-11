# Eliyas Games — Visual Asset Directions

Extracted from the existing portal files under `/mnt/h/NextcloudExternal/eliyas.xyz/Games/`.

---

## Visual Language Snapshot

- **Palette:** Near-black base `#0a0a0f` with purple `#8B5CF6`, cyan `#06B6D4`, and pink `#EC4899` accents.
- **Typography:** Outfit for headings; Inter for body.
- **Texture/Effect:** Glassmorphism cards, gradient animated text, ambient blurred glows, particle canvas.
- **Tone:** Neon retro-future arcade — calm, premium, playful.

---

## 1) Logo Mark Concept

**Concept:** **E / Play Pulse**

A monogram-style mark replacing the browser favicon emoji.

**Spec:**
- Shape: Square with rounded corners, similar to an arcade marquee inset.
- Foreground: Large, bold `E` set in Outfit at a tight tracking.
- Accent: A small cyan circle `#06B6D4` behind the upper-right arm of the `E`, like a pause/reset button dot.
- Detail: The right vertical stem of the `E` terminates in a 6px dashed underline in `--accent-pink` suggesting a controller D-pad or CRT scanline.
- Usage: Works at 32 px favicon scale; works at full wordmark next to colored `.games` suffix.

**Why it fits:**
- Keeps the current wordmark identity, but elevates from plain SVG text emoji to a signature symbol.
- Echoes the existing neon gradients and arcade control aesthetics.

---

## 2) Social Thumbnail Format

**Format:** 1200 × 628 Open Graph card.

**Layout:**
```
[ container: #0a0a0f, 16px radius ]
[ left 60%: headline block ]
  • "Eliyas Games" in Outfit 900, 64px, gradient hero fill
  • Subhead in Inter 400, 28px, #a0a0b8: "Free browser minigames — no ads, no sign-up"
  • Badge pill below: "10 K+ plays" or another live stat if available
[ right 40%: icon stage ]
  • Large `🎮` in glass panel with blur(16px)
  • Behind it: blurred ambient glow blobs matching CSS glow positions
[ bottom strip ]
  • 4 game emojis in a row, small, semi-transparent: 🐍🧩🏓🎨
```

**Technique:** Match landing-page glow colors to maintain cross-asset continuity.

---

## 3) Portal Banner Direction

**Direction:** **Arcade Horizon**

**Spec:**
- Aspect: 21:9 wide banner for homepage or GitHub social preview.
- Composition: Flat-perspective retro grid floor receding to a glowing horizon line in `--accent-pink` to `--accent-purple` gradient. Above the horizon, floating game token silhouettes — controller, dice, card, joystick — in wireframe style, tinted cyan and purple.
- Foreground: Subtle grain/noise overlay at 3% opacity to mimic CRT texture (aligns with current landing polish).
- Typography zone: Left 35%, vertically centered.
  • "Eliyas Games" in Outfit 900, 72–96px
  • Below, smaller line: "play • compete • have fun" in Inter 300, letter-spaced uppercase
- Motion hint: If animated for web header, add a slow 12px translate on the floating tokens.

**Placement notes:**
- Hero section: banner as full-width background with content overlaid using the same `.container` structure already in place.
- Keep CSS tokens consistent (`--gradient-hero`, `--shadow-glow-purple`, `--shadow-glow-cyan`) so the banner reads as belonging to the same system.

---

## Summary

- **Logo mark:** Minimal monogram `E` + dash underbeat, optimized down to 32 px.
- **Social thumbnail:** Left headline + right icon stage on dark glass base, maintaining current palette.
- **Banner:** Retro arcade horizon with floating wireframe tokens, rendered with existing glow tokens and dark base.
