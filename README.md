# Albion killboard api client

Node JS Typescript client to interact with albion killboard API.

Doesn't work for frontend js due to cross origin policies.

## Disclaimer

Not all available API endpoints are covered. Only the one I needed yet.
Feel free to PR or create and issue for the missing features.

## Install

```
npm i node-albion-api
```

## Usage

All the methods are async and return promises.

```typescript
import { AlbionKillboard } from 'node-albion-api';

const api = new AlbionKillboard();
```
