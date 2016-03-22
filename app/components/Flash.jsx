import React from 'react'

/**
 * THIS IS AN AWFUL HACK
 * Functionality for the flash has been effectively hardcoded to
 * give the bare minimum functionality. Based on whether a POST is
 * successful or in error, this displays an appropriate message.
 */
export default function Flash({ status }) {
  if(status.get('posted')) {
    return (
      <p className="flash flash--success">Bet successfully made!</p>
    )
  } else if(status.get('postError')) {
    return (
      <p className="flash flash--error">There was an error attempting to submit your bet.</p>
    )
  } else {
    return (
      <p>&nbsp;</p>
    )
  }
}
