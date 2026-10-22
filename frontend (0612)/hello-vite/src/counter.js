// Export a self-contained click counter; the current page does not import it.
export function setupCounter(element) {
  let counter = 0
  // This closure updates the private counter and renders the current value.
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  // Register the event handler, then initialize the visible value to zero.
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
