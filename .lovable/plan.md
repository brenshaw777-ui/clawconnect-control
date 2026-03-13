

# Terminal Noir Redesign Plan

## Overview
Rebuild the entire ClawConnect landing page with a terminal/console aesthetic. Every element becomes mono-font, sharp-cornered, true-black, with terminal-green accents and scanline overlays. The hero becomes a live terminal session with typewriter animation.

## Design System Changes

### tailwind.config.ts
- Replace font families: remove Space Grotesk and Inter, use JetBrains Mono for all (`heading`, `sans`, `mono`)
- Update `claw` color palette:
  - `deepest` -> `#000000` (true black)
  - `mid` -> `#0a0a0a`
  - `elevated` -> `#111111`
  - `panel` -> `#080808`
  - `panel-hover` -> `#0f0f0f`
  - `text` -> `#c0c0c0` (dimmer, more terminal-like)
  - `muted` -> `#666666`
  - `border` -> `#1a1a1a`
  - `green` -> `#00FF88` (terminal green, primary accent now)
  - `blue` -> `#4DA3FF` (demoted to secondary)
- Set `--radius` to `2px` (sharp corners everywhere)
- Add `scanline` keyframe animation (repeating horizontal line sweep)
- Add `typewriter` keyframe for cursor typing effect

### src/index.css
- Remove Google Fonts import for Space Grotesk and Inter, keep only JetBrains Mono
- Change all `font-heading` / `font-body` utilities to use JetBrains Mono
- Replace `bg-grid-pattern` with a tighter dot-matrix or terminal grid
- Add `.scanline-overlay` utility: a pseudo-element with repeating horizontal lines at low opacity for CRT effect
- Update glow utilities to use green instead of blue as primary
- Background: pure `#000000`

## Component Rebuilds (all 12 files)

### Header.tsx
- Style as a tmux-style status bar: `[ClawConnect]` left, nav links separated by `|` pipes, no rounded buttons
- CTAs become bracketed text links: `[Get Started]` `[GitHub]`
- 1px bottom border, true black bg, no blur/translucency
- All text in mono

### Hero.tsx
- Remove the current split layout with HeroVisual
- Replace with a full-width terminal session simulation
- Show a fake terminal prompt with typewriter animation:
  ```
  $ clawconnect start --port 18990
  [INFO] bridge listening on 127.0.0.1:18990
  [INFO] waiting for extension handshake...
  [OK] extension connected (tab: 3)
  [OK] health check passed
  > ready.
  ```
- Blinking cursor at the end
- Below the terminal: the subtitle text and CTAs styled as terminal commands
- Proof badges become inline status chips: `[OPEN SOURCE]` `[LOCAL HOST]` `[TOKEN PROTECTED]` `[DIAGNOSABLE]` in green mono text
- Use framer-motion for staggered line-by-line typewriter reveal

### HeroVisual.tsx
- Remove or repurpose. The hero terminal replaces this. Can delete the file.

### ProblemSection.tsx
- Section divider: `--- /problem ---` in mono
- Cards become bordered panels with 2px radius, 1px border
- Warning/danger icons stay but use terminal color codes: amber for warning, red for danger, green for observability
- All text mono, card titles uppercase or prefixed with `>` 

### HowItWorks.tsx
- Section divider: `--- /flow ---`
- Steps shown as numbered terminal output lines:
  ```
  [01] Agent sends command to 127.0.0.1:18990
  [02] Bridge authenticates via websocket...
  ```
- Connector lines become `....` or `|` characters
- Green step numbers

### CoreFeatures.tsx
- Section divider: `--- /features ---`
- 6 cards with sharp 2px radius, 1px borders
- Top bar shows endpoint tag in green: `/tabs`, `/command`, etc.
- All mono text, no `font-heading` or `font-sans`

### ApiQuickstart.tsx
- Already close to terminal style, refine:
- Make code blocks true black with 1px green/gray border
- Title bar styled as `user@clawconnect:~$` prompt
- Copy button stays, use green check on copy
- Sharp corners

### OpenSourceTrust.tsx
- Repo panel becomes a terminal `ls -la` style output
- Text section all mono
- Link styled as `> browse the repository_`

### OpenClawIntegration.tsx
- Panel styled as a config file or YAML block
- Integration points prefixed with `- ` like a list in a terminal
- Button: `[view docs]`

### BrowserStore.tsx
- Styled as a package manager output:
  ```
  $ clawconnect install --target chrome
  > Google Web Store (Unlisted)
  > Manual install (dev mode)
  ```
- Buttons become terminal-styled bracketed links

### Roadmap.tsx
- Styled as a TODO/changelog:
  ```
  [ ] Stable Firefox packaging
  [ ] Signed extension builds
  [ ] Team API endpoints
  [ ] Installer scripts
  ```
- Checkbox-style markers, mono text

### FinalCTA.tsx
- Dark panel with scanline overlay
- Green glow instead of blue
- Terminal prompt style: `> get started_`
- Sharp corners, 1px border

### Footer.tsx
- Single line tmux-style bar
- Links separated by `|`
- Copyright as `// ClawConnect 2026`

### Index.tsx
- Add scanline overlay to the root wrapper
- Replace border dividers with ASCII-style: `───────────────────`
- True black background

## Animation Details
- **Typewriter**: Hero terminal lines appear character-by-character with staggered delays using framer-motion
- **Cursor blink**: Already have keyframe, will use for terminal cursor `_` or `█`
- **Scanline**: CSS pseudo-element with repeating-linear-gradient, animated vertical position, very low opacity (0.03-0.05)
- **Section entries**: Subtle fade-in only, no translateY lifts

## Files to modify
1. `tailwind.config.ts` - colors, radius, fonts, keyframes
2. `src/index.css` - fonts, utilities, background, scanline
3. `src/pages/Index.tsx` - scanline wrapper, ASCII dividers
4. `src/components/landing/Header.tsx` - tmux bar
5. `src/components/landing/Hero.tsx` - terminal session with typewriter
6. `src/components/landing/HeroVisual.tsx` - delete or empty
7. `src/components/landing/ProblemSection.tsx` - terminal cards
8. `src/components/landing/HowItWorks.tsx` - terminal step output
9. `src/components/landing/CoreFeatures.tsx` - sharp terminal cards
10. `src/components/landing/ApiQuickstart.tsx` - refined terminal code blocks
11. `src/components/landing/OpenSourceTrust.tsx` - ls-style panel
12. `src/components/landing/OpenClawIntegration.tsx` - config-style panel
13. `src/components/landing/BrowserStore.tsx` - package manager style
14. `src/components/landing/Roadmap.tsx` - TODO checklist
15. `src/components/landing/FinalCTA.tsx` - green glow terminal CTA
16. `src/components/landing/Footer.tsx` - tmux footer bar

