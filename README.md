# Betting App (Brunch + Redux + React + Babel/ES6)

This is a small React app that allows a user to view available bets, add possible bets to a slip, and to post those bets with a stake.

## Installation

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production.
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## Notes regarding the brief

Do keep the console open while you're in the app: `redux-logger` has been left in, so there is a full stream logging the state at every point before and after every action. The state tree is fully described at every point, so you can drill down into any part of it.

* I can't get any values bar the `transaction_id` from the `postedBets` Map. I don't know why, as the object looks and queries properly. This means each receipt in the history has undefined for all values bar the transaction ID.
* The errors are a hackjob; there is a `Flash` component that renders out based on status, but the logic is primitive, and it's effectively hardcoded. All works, but in no way clean/elegant.
* POST request responses are coming back with `null` bodies rather than the receipt objects specified in the brief. For this reason, the responses have been faked in `actions/postBets.js` to match those specified.
* The `CSSTransitionGroup` React addon has not been included at this point; this would allow easy implementation of smooth transitioning between states, but I didn't have time to set it up.

### Redux

The app is built on **React**, with **Redux** as a state container (rather than, say, Backbone). If you are unfamiliar with it, at its core, it specifies that the state be held in a single immutable object that is rebuilt on *every* state change. The way it is works is almost identical to how [Elm handles state](http://elm-lang.org/guide/model-the-problem), and also very similar to [how Observables operate](https://medium.com/@andrestaltz/2-minute-introduction-to-rx-24c8ca793877#.lz0mhhoju), or indeed the command-query pattern (*current state is a left fold of previous behaviours*). SO

A user does something, *eg clicking a button to remove a bet*.

That dispatches an `action` (the actions are specified in the `actions/` folder, natch). The actions are simply plain JS objects, with a mandatory `type` field along with possible other fields. *eg, the event in question also sends an ID so that the correct bet can be removed from the slip*.

```
export function unsetSlipBet(id) {
  return {
    type: UNSET_SLIP_BET,
    id
  }
}
```

Note that the types are by convention constants, which are all specified together in `constants/actionTypes.js`.

```
export const UNSET_SLIP_BET = 'UNSET_SLIP_BET'
```

The dispatch goes to a *reducer* function (held in `reducers/`), which modifies the state (literally the same as any other `reduce` function). Each reducer function will generally deal only with a part of the state tree. *eg the part of the state affected by the `UNSET_SLIP_BET` action is `slipBets`, and the `UNSET_SLIP_BET` action simply deletes the bet with the matching ID from that part of the tree*.

```
export default function slipBets(state = Immutable.Map(), action) {
  switch(action.type) {
    case SET_SLIP_BET:
      return state.set(action.id, addSlipProps(action.value))
    case UNSET_SLIP_BET:
      return state.delete(action.id)
    case CLEAR_SLIP_BETS:
      return state.clear()
    // ...snip
    default:
      return state
  }
}
```

The state then updates, in turn triggering update/s of relevant React components. It's extremely simple, there isn't really much more to it than that. Redux provides a few nice helpers - for example it will generate the stateful components (held in `containers/`), wiring up the actions to dispatch and the state to be passed down as `props`. But the library and its API are, overall, tiny. Note that it It *strongly* encourages the rest of the components to be pure functions (note some of the components here do have some ephemeral state, input `onChange` event handling being an obvious one, but the majority are Just Functions).

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
4. `status`: a Map of various statuses, all booleans, used to conditionally show things in the views. *Incomplete, only includes the loading statuses*.
5. `postedBets`: this *should* be a Map of the collected JSON receipts returned from POST requests. It currently is not, see the **TODO** above.






