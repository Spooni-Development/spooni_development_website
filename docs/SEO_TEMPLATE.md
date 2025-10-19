# SEO Meta-Tags Template für SPOONI Dokumentation

Diese Datei dient als Referenz für das Hinzufügen von SEO-Meta-Tags zu den verbleibenden Dokumentationsseiten.

## Allgemeine Struktur

Fügen Sie am Anfang jeder Markdown-Datei (vor dem ersten `#` Titel) ein Frontmatter mit folgenden Meta-Tags hinzu:

```markdown
---
title: [Seitentitel]
description: [150-160 Zeichen prägnante Beschreibung mit relevanten Keywords]
head:
  - - meta
    - name: keywords
      content: [Komma-getrennte Keywords, relevant für die Seite]
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/[relativer-pfad-zur-seite]
---
```

## Templates für verschiedene Seitentypen

### Script-Dokumentation Template

```markdown
---
title: [Script Name]
description: SPOONI [Script Name] for RedM - [Kurze Feature-Beschreibung]. Compatible with [VORP/RSG/RPX]. [Hauptvorteil oder Verwendungszweck].
head:
  - - meta
    - name: keywords
      content: RedM [script name], [hauptfeature], [framework] script, [verwendungszweck], RDR2 [kategorie], spooni [script name]
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_scripts/[pfad]
---
```

**Beispiel:**
```markdown
---
title: Zeppelin Script
description: SPOONI Zeppelin script for RedM - Interactive airship transportation system with passenger management and flight controls. Create immersive aerial experiences for your RDR2 roleplay server.
head:
  - - meta
    - name: keywords
      content: RedM zeppelin, airship script, RedM transportation, flight system, aerial vehicle, VORP zeppelin, RSG zeppelin, RDR2 airship
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_scripts/spooni/spooni_zeppelin
---
```

### Mapping-Dokumentation Template

#### Saint Denis MLOs
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. High-quality interior mapping for Saint Denis roleplay servers in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: Saint Denis [gebäude], RedM [gebäude] MLO, St Denis [typ], RDR2 [gebäude] interior, [funktion] MLO, Lemoyne mapping, spooni saint denis
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/lemoyne/saint-denis/[dateiname]
---
```

#### Valentine MLOs
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. Premium [typ] building for Valentine roleplay servers in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: Valentine [gebäude], RedM [gebäude] MLO, New Hanover [typ], RDR2 [gebäude] interior, Valentine mapping, [funktion] roleplay
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/new-hanover/valentine/[dateiname]
---
```

#### Blackwater MLOs
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. Premium [typ] mapping for Blackwater roleplay servers in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: Blackwater [gebäude], RedM [gebäude] MLO, West Elizabeth mapping, RDR2 [gebäude] interior, Blackwater MLO, [funktion] roleplay
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/west-elizabeth/blackwater/[dateiname]
---
```

#### Rhodes MLOs
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. Quality interior for Rhodes roleplay servers in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: Rhodes [gebäude], RedM [gebäude] MLO, Lemoyne [typ], RDR2 Rhodes interior, Rhodes mapping, [funktion] MLO
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/lemoyne/rhodes/[dateiname]
---
```

#### New Austin MLOs
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. Premium New Austin mapping for Wild West roleplay in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: [gebäude], RedM [typ] MLO, New Austin mapping, [gebäude] interior, Wild West [typ], RDR2 [region], New Austin MLO
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/new-austin/[dateiname]
---
```

#### Andere Regionen (Ambarino, etc.)
```markdown
---
title: [Gebäudename]
description: SPOONI [Gebäudename] MLO for RedM - [Detaillierte Raumbeschreibung]. High-quality [region] mapping for Red Dead Redemption 2 roleplay servers.
head:
  - - meta
    - name: keywords
      content: [gebäude], RedM [typ] MLO, [region] mapping, RDR2 [gebäude] interior, [region] MLO, [funktion] roleplay
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/[region]/[dateiname]
---
```

## Keyword-Empfehlungen nach Kategorie

### Script Keywords
- **Hotel/Housing:** hotel script, room rental, accommodation, housing system, property management
- **Transportation:** vehicle script, transport system, travel, transportation
- **Entertainment:** entertainment script, attractions, activities, shows
- **Jobs/Economy:** job script, economy, business, income
- **Utilities:** utility script, tools, administration, management
- **Free Scripts:** free script, standalone, open source, community script

### Mapping Keywords nach Typ
- **Police/Law:** police station, sheriff office, jail, law enforcement, cells
- **Medical:** doctor office, hospital, medical center, clinic, infirmary
- **Commercial:** store, shop, business, general store, merchant
- **Religious:** church, chapel, religious building, worship
- **Entertainment:** saloon, theater, casino, club, entertainment
- **Residential:** house, apartment, home, residence, living quarters
- **Industrial:** factory, workshop, warehouse, industrial, production
- **Fort/Military:** fort, military base, barracks, armory, garrison

### Regional Keywords
- **Saint Denis:** Saint Denis, St Denis, Lemoyne, city, urban, metropolitan
- **Valentine:** Valentine, New Hanover, frontier town, cattle town
- **Blackwater:** Blackwater, West Elizabeth, river town, trading post
- **Rhodes:** Rhodes, Lemoyne, southern town, plantation region
- **Armadillo:** Armadillo, New Austin, desert town, frontier
- **Tumbleweed:** Tumbleweed, New Austin, ghost town, abandoned
- **Annesburg:** Annesburg, New Hanover, mining town, coal mine
- **Van Horn:** Van Horn, New Hanover, port town, trading post
- **Strawberry:** Strawberry, West Elizabeth, mountain town, logging

## Best Practices

1. **Description Länge:** 150-160 Zeichen optimal für Google Search Results
2. **Keywords:** 8-12 relevante Keywords, wichtigste zuerst
3. **Title Format:** Klar und beschreibend, enthält Hauptkeyword
4. **Natürliche Sprache:** Descriptions sollten natürlich lesbar sein, nicht keyword-stuffing
5. **Unique Content:** Jede Seite sollte eine einzigartige Description haben
6. **Relevanz:** Keywords müssen relevant zum Seiteninhalt sein
7. **URL Consistency:** Canonical URLs müssen exakt dem Dateipfad entsprechen

## Workflow für Batch-Updates

Für das Hinzufügen von Meta-Tags zu mehreren Dateien:

1. Identifizieren Sie die Kategorie (Script/Mapping/Region)
2. Wählen Sie das passende Template
3. Lesen Sie den Seiteninhalt, um spezifische Features zu identifizieren
4. Erstellen Sie eine prägnante, keywordreiche Description
5. Wählen Sie 8-12 relevante Keywords
6. Setzen Sie die korrekte canonical URL
7. Fügen Sie das Frontmatter am Anfang der Datei ein

## Hinweise

- Die dynamische Meta-Tag-Generierung in `config.mts` ergänzt diese manuellen Tags
- Frontmatter-Meta-Tags haben Vorrang vor automatisch generierten Tags
- Alle URLs verwenden `https://spooni.pages.dev` als Basis-Domain
- Keine Sitemap-Referenzen gemäß den Projektanforderungen

## Dateien, die bereits optimiert wurden

### Hauptseiten
- ✅ index.md
- ✅ docs.md
- ✅ team.md
- ✅ partner.md
- ✅ service.md
- ✅ props.md

### Script-Dokumentation (Beispiele)
- ✅ doc_scripts/spooni/spooni_hotel.md
- ✅ doc_scripts/spooni/spooni_build_my_home.md
- ✅ doc_scripts/spooni/spooni_interactions.md

### Mapping-Dokumentation (Beispiele)
- ✅ doc_mappings/lemoyne/saint-denis/spooni_sd_police.md
- ✅ doc_mappings/new-austin/spooni_fort_mercer.md
- ✅ doc_mappings/new-hanover/valentine/spooni_val_church.md

## Verbleibende Dateien

Nutzen Sie die obigen Templates, um Meta-Tags für die verbleibenden ~100+ Dokumentationsseiten hinzuzufügen.

