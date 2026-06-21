---
title: "API"
omschrijving: "Een real-time multiplayer quiz over de serie Friends."
datum: 2026-06-04
cover: "../../assets/api-cover.png"
alt_tekst: "The One With The Quiz, een quiz applicatie"
live_url: "https://the-one-with-the-quiz.onrender.com/"
vak: "API"
docent: "Cyd Stumpel"
cijfer: "8,5"
---
Dit was een vrij ambitieus project: het bouwen van een eigen multiplayer applicatie. Geen simpele website met een beetje tekst, maar een live, real-time quiz gebaseerd op mijn favoriete serie: Friends. De quiz heet (natuurlijk) *The One With The Quiz*. 

## Nieuwe Inzichten
Omdat ik tijdens dit vak voor het eerst met websockets heb gewerkt, heb ik veel nieuwe dingen geleerd. Ik heb geleerd dat het "echte internet" een stuk strenger is dan localhost op mijn eigen laptop, wat het verschil is tussen HTTP en WebSockets (HTTP is vraag en antwoord, WebSockets zijn een lopende verbinding) en dat deployment een vak apart is! Het online krijgen van mijn quiz via Render was misschien wel de grootste uitdaging. Ik kwam erachter dat mijn Astro frontend en mijn Node.js backend niet zomaar door dezelfde port konden. Het configureren van ports en gescheiden URL's (`wss://`) was een heel leerproces!

## Hoogtepunten

### Code
Het hoogtepunt in mijn code was toen ik de WebSocket dusdanig werkend had gekregen dat alle verbonden telefoons tegelijkertijd van scherm wisselden. Het was een hele opluchting dat dat werkte en ik vond het heel gaaf dat ik iets had gebouwd wat écht werkte.

### Ontwerp
Ik ben heel trots op de styling van mijn website. Ik heb mijn best gedaan om met grote dingen (zoals het krijtbord in de lobby en bij de eindscore) en kleinere dingen (het Friends-font en het gebruiken van de kleuren uit het logo) de sfeer zo Friends-mogelijk te maken.

### Werkwijze
Hier was het hoogtepunt toch wel debuggen onder druk. Toen een paar uur voor de deadline mijn app crashte op de server, heb ik geleerd om niet in paniek te raken maar het probleem stap voor stap te ontleden om uiteindelijk de oplossing te vinden.

## Verder ontdekken
Ik ben heel benieuwd naar Astro’s Client Router (wat voorheen View Transitions heette) om de overgangen tussen schermen soepeler te maken. Omdat ik daar in dit project niet meer aan toe ben gekomen, wil ik dat bij een volgend project wel toepassen. Daarnaast vind ik het heel gaaf wat er allemaal mogelijk is met web/content API’s en is dat zeker iets wat ik vaker wil gebruiken om daar meer in te ontdekken.