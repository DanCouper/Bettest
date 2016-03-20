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
