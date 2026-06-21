---
title: "De Voorhoede"
datum: 2026-06-04
type: "weekly-nerd"
omschrijving: "Op bezoek bij het webdevelopmentbureau de Voorhoede."
---
Vandaag gingen wij op bezoek bij De Voorhoede, het webdevelopmentbureau waar Victor, een van onze docenten, werkt. Tijdens deze middag kregen we een drietal inspirerende presentaties van verschillende specialisten binnen het bedrijf. Hieronder vind je mijn belangrijkste inzichten en take-aways per spreker.

## Marleen (Frontend-developer)

Marleen nam ons mee in de dagelijkse praktijk van een frontend-developer en liet zien dat het vak veel verder gaat dan alleen code kloppen.

- **Breder dan design nabouwen:** Als frontend-developer heb je juist de vrijheid én de verantwoordelijkheid om proactief creatieve suggesties te doen op basis van wat er technisch mogelijk is.
- **Communicatie is key:** Een groot deel van het werk bestaat uit het vertalen van "mega vage" bug-mails van klanten naar gerichte technische oplossingen. Hoe je communiceert hangt sterk af van hoe technisch de klant is.
- **Interne projecten:** Naast het bouwen van vette high-traffic sites (zoals hun project voor het DGTL festival), is er binnen De Voorhoede veel ruimte voor het ontwikkelen van interne plugins en het schrijven van blogposts.

## Peter (Accessibility specialist)

Peter deelde zijn passie voor digitale toegankelijkheid (A11y) en hoe je dit als developer kunt waarborgen, zelfs als de klant tegenstribbelt.

- **Fysieke impact:** Digitale producten hebben een directe fysieke impact op gebruikers. Toegankelijkheid is daarom essentieel, hoewel klanten het vaak onterecht bestempelen als "te duur" of "te tijdrovend".
- **De 20%-regel:** De oplossing? Zie toegankelijkheid niet als een extra feature, maar als de absolute standaard. Voer die extra 20% werk voor een toegankelijke basis gewoon uit zonder dit expliciet ter discussie te stellen bij de klant.
- **Slim samenwerken:** In plaats van het wiel zelf uit te vinden, kun je het beste open-source componenten (zoals die van het NL Design System / Gemeente Den Haag) uitbreiden en via pull requests weer teruggeven aan de community.
- **Design tokens:** Door CSS-waardes los te koppelen van de harde implementatie en in een centraal JSON-bestand op te slaan, kunnen designers in Figma werken. De styling wordt vervolgens naadloos en toegankelijk geüpdatet, ongeacht de huisstijl van de klant.

## Bas (Offline first design)

Bas daagde ons uit om op een compleet andere manier naar internetverbindingen te kijken door uit te gaan van het slechtste scenario.

- **Het kernprincipe:** Ga er bij het ontwerpen en bouwen standaard vanuit dat de gebruiker *geen* of een zeer slechte verbinding heeft.
- **Lokaal opslaan:** Sla data zo snel mogelijk lokaal op het device op en synchroniseer dit pas op de achtergrond zodra er weer netwerk is (vergelijkbaar met het bekende klokje bij een verzonden WhatsApp-bericht). Dit resulteert in een razendsnelle interface, flinke batterijbesparing en een app die altijd werkt.

### De 3 technische pijlers:
1. **Service workers & caching:** Werk met een slimme strategie. Gebruik 'cache-first' voor statische assets en 'network-first' voor dynamische data.
2. **Local storage:** Zet IndexedDB in voor complexe datastructuren en localStorage voor de simpele key-value data.
3. **Sync frameworks:** Regel de data-overdracht soepel via moderne API's.

- **De grootste uitdaging:** Conflictbeheer. Want wie heeft er gelijk en welke data is leidend als meerdere apparaten na een offline periode tegelijkertijd weer online komen?

## Wat neem ik mee?

Wat ik voornamelijk meeneem uit dit bedrijfsbezoek is ten eerste hoe ontzettend belangrijk toegankelijkheid is. Dit is een onderwerp dat in bijna elke Weekly Nerd op de een of andere manier terugkomt, wat wel bewijst hoe serieus dit genomen moet worden in de industrie. Zorgen dat een digitaal product voor iedereen toegankelijk is, is geen optionele luxe, maar een keiharde vereiste en mijn verantwoordelijkheid als developer. 

Daarnaast neem ik mee dat ik als developer een actieve rol moet aannemen: proactief meedenken met de designer over de technische haalbaarheid, maar tegelijkertijd ook optreden als een filter en vertaler richting de klant.