import { DateTime, Duration } from "luxon";

export type TimerDefinition = {
  name: string
  epoch: DateTime
  interval: Duration
  highLowOffset: Duration
}
