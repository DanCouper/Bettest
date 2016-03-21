# Betting App (Brunch + Redux + React + Babel/ES6)

This is a small React app that allows a user to view available bets, add possible bets to a slip, and to post those bets with a stake. It is built on top of modern JS skeleton with React and Redux for [Brunch](http://brunch.io).

## Notes *re* brief

Error handling is nonexistant at the minute: the responses are there, but I ran out of time. There is no validation on the inputs, so any old crap can be submitted.

Re submitting a bet: I changed the logic and data structure to allow a number of bets to be submitted (one by one) at once. So each bet needs the `set stake` button to be pressed so that the stake is actually written into the state. Note triggering `onBlur` on an input will automatically write the value to the state.

Changing the logic caused the submission logic to fail; I was halfway through rewiriting and had to stop due to time constraints - it should iterate throught the bets on the slip and submit them one after the other, but it doesn't.

Getting a `null` response body from successful POST requests from the server; can't get a usable response, which means the bet history is unavailable.


### TODO

* Review markup & CSS class naming.
* Redo design as responsive.
* Add React `CSSTransitionGroup` helpers to allow transitions when state updated.

### Deps

- [React](https://facebook.github.io/react/)
- the [Redux](http://redux.js.org) state container. [`redux-thunk`](https://github.com/gaearon/redux-thunk) and [`redux-logger`](https://github.com/fcomb/redux-logger) middlewares are also included. The former allows for delaying dispatch of actions (useful for async), latter logs to console.
- [Immutable](https://facebook.github.io/immutable-js/) for the internal data collections.
- GitHub's [window.fetch polyfill](https://github.com/github/fetch).

### Dev Deps

- [Brunch](http://brunch.io/) used instead of Gulp or WebKit for time reasons. Extremely fast, almost zero-config build tool. Means no hotloader/time-travelling debugger, but heyho ¯\_(ツ)_/¯
- Babel, Scss


### Data Structure

*NB* **1** is a transformation of the array of bets fetched from the API:

1. `bets`: An immutable Map (keyed by `bet_id`) of available bets.
2. `slipbets`: An immutable Map (keyed by `bet_id`) of bets on the slip. These bets have extra properties (`stake`, `payout`) mapped to them when cloned from **1**. Isolates the slip from the list of bets, ensuring stakes can be set & submitted (or the bets removed from the slip) without having any effect on the rest of the app.
3. `fractionalOdds`: A boolean which decides whether odds should be viewed as fractional or decimal.

## Installation

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)




