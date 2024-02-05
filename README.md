# react-player-for-gutenverse
React Player for Gutenverse

## Cara build

1. Clone code dari https://github.com/cookpete/react-player
2. Buat 1 folder api, kemudian download semua script yang dibutuhkan, diberi nama ``reactplayer-namasource-api.js`` (kecuali youtube)
3. di ``src/utils.js`` tambahkan code ini dipaling bawah.
```
export function getAssetPath () {
  const { framework_asset } = window.GutenverseFrontendConfig
  return framework_asset + 'js'
}
```
4. di ``src/players`` rubah jadi file local dengan file api yang sudah didownload tsb.
5. Compile dengan `npm run build:standalone; npm run prepublishOnly;`
5. Sekarang buat 1 folder dengan nama version yang tertera di `react-player`
6. Copy code hasil compile dengan content seperti https://www.npmjs.com/package/react-player?activeTab=code
7. Commit code ke `react-player-for-gutenverse`. kemudian di `gutenverse-core` rubah `react-player` dengan value `https://gitpkg.now.sh/Jegstudio/react-player-for-gutenverse/version?main` (rubah version dengan versi react-player yang di compile)