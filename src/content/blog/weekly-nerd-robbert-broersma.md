---
title: "Weekly Nerd: Robbert Broersma & Yolijn van der Kolk"
type: "weekly-nerd"
datum: 2026-03-12
---

Robbert en Yolijn van Frameless deelden hun best practices voor formulieren op basis van het NL Design System.

## Onderwerpen & Tools
Een formulier is meer dan een paar inputveldjes. Het gaat om de hele flow: van de introductietekst tot de bevestigingspagina. 

**Belangrijke tips voor toegankelijke formulieren:**
- **Structuur:** Gebruik `fieldset` en `legend` voor groepen velden. 
- **Labels:** Koppel elk label met een `for`-attribuut aan de `id` van de input. Zet uitleg *buiten* het label.
- **Feedback:** Toon foutmeldingen niet alleen met kleur, maar ook met tekst en iconen. Gebruik `aria-describedby` om foutmeldingen te koppelen aan het veld.
- **Toetsenbord:** Zorg voor een knal-opvallende focus indicator (dotted border of neon kleur).

## Wat ga ik meenemen?
Ik ga mijn eigen formulieren voortaan altijd testen met alleen mijn toetsenbord en een screenreader. Die `aria-describedby` koppeling is iets wat ik vaak vergeet, maar wat super belangrijk is voor de context van een foutmelding.