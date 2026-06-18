---
title: "Browser Tech: Formulier"
omschrijving: "Een belastingformulier in de huisstijl van de NS."
datum: 2026-04-09
cover: "../../assets/bt-cover.png"
alt_tekst: "Screenshot van het NS belastingformulier"
---
## Link
https://jeppedewilde.github.io/browsertech/

Voor dit vak moest ik een belastingformulier bouwen in de huisstijl van de NS. Een belangrijke term tijdens dit vak was *progressive enhancement*; beginnen met de absolute basis (HTML) en de code steeds verder uitbreiden met CSS en later JavaScript.

## Nieuwe Inzichten
Tijdens dit vak heb ik ontdekt hoe krachtig native HTML eigenlijk is. Waar ik voorheen heel snel naar CSS en JavaScript greep voor interactie of validatie, weet ik nu dat je met simpele attributen zoals `pattern`, `minlength` en het `<datalist>` element al heel veel problemen kunt oplossen. 

## Hoogtepunten

### Code
Het hoogtepunt in mijn code was het combineren van native HTML-validatie met mijn eigen JavaScript. Mijn script luistert naar `input.validity.valid` en toont op basis daarvan dynamisch de juiste fout- of succesmeldingen. Ook ben ik er trots op dat ik mijn JavaScript succesvol heb opgesplitst in logische, herbruikbare modules. Dat was echt priegelen maar het heeft mijn code veel overzichtelijker gemaakt.

### Ontwerp
Ik ben heel erg blij met hoe overzichtelijk het formulier is geworden door het slim opzetten van CSS variabelen (voor de NS-kleuren en typografie). Ook het feit dat mijn feedback niet alleen op kleur leunt (rood/groen) maar ook duidelijke tekst bevat is iets waar ik trots op ben.

### Werkwijze
Hier was het hoogtepunt de HTML-first benadering. Bij eerdere projecten begon ik vaak direct aan de styling en logica, maar nu heb ik eerst een echt goed fundament gebouwd. Ik zorgde dat het formulier 100% werkte zonder CSS of JS. Pas toen dat stond, ging ik het enhancen. Deze gelaagde manier van werken gaf me verrassend veel rust tijdens het bouwen.

## Verder ontdekken
Omdat ik nu de basis van betrouwbare formulieren snap, ben ik heel benieuwd naar meer geavanceerdere functionaliteiten zoals het opslaan van ingevulde gegevens in `localStorage`. Ik wil graag leren hoe je zorgt dat een gebruiker zijn ingevulde formulier niet kwijtraakt als de browser per ongeluk sluit.