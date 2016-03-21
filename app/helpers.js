/**
 * The promise returned from `fetch()` does not reject on HTTP error status.
 * ∴ a handler function must be provided: errors need to be displayed.
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/** JSON is expected as a response. */
export function parseJSON(response) {
  return response.json()
}

/* Calculate a payout based on fractional odds.
 * NOTE: the stake comes via an input; it needs to be coerced to a number. */
export function payoutCalculator(stake, numerator, denominator) {
  const calc = ((numerator / denominator) * Number(stake)) + Number(stake)
  return calc.toFixed(2)
}


export function oddsFormatter(format, numerator, denominator) {
  return new Map([
    ['FRACTIONAL', `${numerator}-${denominator}`],
    /* NOTE: the `number` wrapping the calculation is to remove trailing zeroes */
    ['DECIMAL', `${Number((numerator / denominator + 1).toFixed(2))}`]
  ]).get(format)
}
