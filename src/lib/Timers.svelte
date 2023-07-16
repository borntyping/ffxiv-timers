<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import Timer from "./Timer.svelte";
  import type { TimerDefinition } from './types'

  const timers: TimerDefinition[] = [
    {
      name: "Weekly Reset",
      epoch: DateTime.utc().startOf('week').set({ weekday: 1, hour: 8 }),
      interval: Duration.fromObject({ weeks: 1 }),
      calculateLow: (min, max) => min.plus({ days: 3.5 }),
      calculateHigh: (min, max) => max.minus({ days: 1 }),
      calculateOptimum: (min, max) => max.minus({ days: 3 }),
    },
    {
      name: "Daily Reset",
      epoch: DateTime.utc().startOf('day').set({ hour: 15 }),
      interval: Duration.fromObject({ day: 1 }),
      calculateLow: (min, max) => min.plus({ hours: 3 }),
      calculateHigh: (min, max) => max.minus({ hours: 3 }),
      calculateOptimum: (min, max) => max.minus({ hours: 12 }),
    },
    {
      name: "Daily Reset (Grand Companies)",
      epoch: DateTime.utc().startOf('day').set({ hour: 20 }),
      interval: Duration.fromObject({ day: 1 }),
      calculateLow: (min, max) => min.plus({ hours: 3 }),
      calculateHigh: (min, max) => max.minus({ hours: 3 }),
      calculateOptimum: (min, max) => max.minus({ hours: 12 }),
    },
    {
      name: "Ocean fishing",
      epoch: DateTime.utc().startOf('day').set({ hour: 0 }),
      interval: Duration.fromObject({ hours: 2 }),
      calculateLow: (min, max) => min.plus({ minutes: 15 }),
      calculateHigh: (min, max) => max.minus({ minutes: 15 }),
      calculateOptimum: (min, max) => max.minus({ minutes: 5 }),
    }
  ]
</script>

<div>
  {#each timers as definition}
    <Timer definition={definition} />
  {/each}
</div>
