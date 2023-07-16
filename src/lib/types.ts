import { DateTime, Duration } from "luxon";

export type TimerCallback = (min: DateTime, max: DateTime) => DateTime

export type TimerDefinition = {
  name: string
  epoch: DateTime
  interval: Duration

  calculateLow: TimerCallback
  calculateHigh: TimerCallback
  calculateOptimum: TimerCallback
}
