# Hollowlight

A fantasy trading card duel game in the spirit of the first Yu-Gi-Oh Duel Monsters era.

The whole game lives in `game/index.html`. Everything else wraps it as a desktop app.

## Play in the browser

Every push that changes `game/` publishes the web version with GitHub Pages:
https://salvafran.github.io/Hollowlight/

## Desktop app (Windows, macOS, Linux)

Download the installer for your system from the latest release:
https://github.com/SalvaFran/Hollowlight/releases

Installed copies check for a new release on start and update themselves.
F11 or Alt+Enter toggles fullscreen.

## Releasing a new version

1. Replace `game/index.html` with the new build.
2. Raise `version` in `package.json` (for example 0.1.0 to 0.2.0).
3. Commit, then tag and push: `git tag v0.2.0 && git push --tags`.
4. The "Build desktop release" workflow builds the three installers and attaches them to the release. Creating the release on GitHub with that tag works too.

## Run locally

    npm install
    npm start

## Notes

- Saves live in the app's local storage on each computer. Steam Cloud saves can be added later through Steamworks.
- The installers are not code-signed yet, so Windows SmartScreen and macOS Gatekeeper will warn on first launch.
- Steam: upload the built app with SteamPipe once a Steamworks app exists. Steam then handles updates itself.
