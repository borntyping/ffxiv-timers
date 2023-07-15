import { DateTime, Duration } from "luxon";

export function animate(callback: () => void, minInterval: number = 1000): void {
  function frame() {
    setTimeout(() => requestAnimationFrame(frame), minInterval)
    callback()
  }

  frame()
}

export function recurring(epoch: DateTime, interval: Duration): {
  next: DateTime,
  previous: DateTime,
  intervals: number
} {
  const now = DateTime.utc()

  let next = epoch
  let previous = epoch.minus(interval)
  let intervals = 0
  while (next < now) {
    previous = next
    next = next.plus(interval)
    intervals = intervals + 1
  }

  return { next, previous, intervals }
}
