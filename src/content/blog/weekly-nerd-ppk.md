---
title: "Weekly Nerd: Peter Paul Koch (PPK)"
type: "weekly-nerd"
datum: 2026-02-19
---

PPK kwam praten over de geschiedenis van browsers en waarom het web soms zo 'hostiel' aanvoelt als developer.

## Onderwerpen & Tools
We doken in de wereld van **Rendering Engines**. Het was interessant om te horen dat browsers als Chrome, Edge en Opera eigenlijk allemaal dezelfde motor gebruiken (Blink/Chromium), terwijl Safari op WebKit draait en Firefox op Gecko. 

**Belangrijke technische begrippen:**
- **DOM vs AOM:** De DOM kennen we, maar de AOM (Accessibility Object Model) is specifiek voor screenreaders.
- **Render blocking:** Waarom we JavaScript vaak onderaan zetten of `defer`/`async` gebruiken om te voorkomen dat de pagina traag laadt.
- **Backward compatibility:** Waarom oude fouten op het web nog steeds ondersteund worden (zoals de `<iframe>`).

## Wat ga ik meenemen?
Het concept van 'Browsers als een vijandig platform' vond ik wel een eye-opener. Ik ga voortaan beter opletten hoe ik mijn scripts inlaad. Ik wil meer gaan experimenteren met `defer` en `async` om mijn sites sneller te maken, en ik ga vaker checken hoe een site eruitziet in een andere engine dan alleen Chromium.