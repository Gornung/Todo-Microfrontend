# shared-types

Dieses Projekt enthält gemeinsam genutzte Typdefinitionen für Komponenten in einer Mikrofrontends-Architektur.  
Es ermöglicht es, Typinformationen zwischen verschiedenen Projekten zu teilen und konsistent zu verwenden.
Leider ist es beim Bundler wie Webpack nicht möglich diese zu überreichen, da Webpack nur minified Javascript code nutzt.



### Schritt 1
#### Dependencies installieren

Navigiere ins shared-types/ Verzeichnis

```npm i```


### Schritt 2
#### Typescript compilieren
Generierung der `*.d.ts` Dateien

`npx tsc` 

### Schritt 3
#### Paket verlinken

`npm link`

### Schritt 4
#### Verlinkung in jeweiligen Repository bzw. Micro frontend nutzen

Am Beispiel der Elements

`cd ../Elements`

`npm link shared-types`

### Schritt 5
#### Importieren des types

`import { TypName } from 'shared-types';`