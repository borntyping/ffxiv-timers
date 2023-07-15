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
  let intervals = 0
  while (next < now) {
    next = next.plus(interval)
    intervals = intervals + 1
  }

  const previous = next.plus(interval.negate())

  return { next, previous, intervals }
}
