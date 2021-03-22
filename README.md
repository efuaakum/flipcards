# Flip Cards Game

[![Super Linter](https://github.com/efuaakum/flipcards/actions/workflows/linter.yml/badge.svg)](https://github.com/efuaakum/flipcards/actions/workflows/linter.yml)
[![Flip cards CI/CD](https://github.com/efuaakum/flipcards/actions/workflows/ci-workflow.yml/badge.svg)](https://github.com/efuaakum/flipcards/actions/workflows/ci-workflow.yml)

This repository contains a simple React.js memory and knowledge game. The game is hosted using [GitHub pages](https://efuaakum.github.io/flipcards).

## Quick Start

1. Clone the repository
1. Run `npm install` from the root directory to install the node modules
1. Run `npm test` to run the latest test script
1. To run a local version of the the app, from a terminal set the `PUBLIC_URL` to the root directory, e.g.
- Mac: `export PUBLIC_URL=.`
- Windows: `SET PUBLIC_URL=.`
5. Then call `npm run` from the terminal
1. Or alternatively call `make run-dev` from the command line.

## How to Play

Flip the cards and remember the positions. Match all the pairs to finish the game.

### Initial Game Load

View when the initial game loads.

![Initial Game View](docs\img\game-initial.png)

### No Match

View when two cards don't match.

![Initial Game View](docs\img\game-no-match.png)

### Matched

View when two cards match.

![Initial Game View](docs\img\game-match.png)

## Future Enhancements

### Gamification

- Add a counter for number of tries
- Add a timer
- Add points for each match
  - Add counter for game points
- Add leader board

### Content Management
- Add, remove, edit cards
- Add new games (set of cards)
- Change card background design
- Change background of game
