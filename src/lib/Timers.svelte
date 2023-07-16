<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import Timer from "./Timer.svelte";
  import type { TimerDefinition } from './types'

  const timers: TimerDefinition[] = [
    {
      name: "Weekly Reset",
      epoch: DateTime.utc().startOf('week').set({ weekday: 1, hour: 8 }),
      interval: Duration.fromObject({ weeks: 1 }),
    },
    {
      name: "Daily Reset",
      epoch: DateTime.utc().startOf('day').set({ hour: 15 }),
      interval: Duration.fromObject({ day: 1 }),
    },
    {
      name: "Daily Reset (Grand Companies)",
      epoch: DateTime.utc().startOf('day').set({ hour: 20 }),
      interval: Duration.fromObject({ day: 1 }),
    },
    {
      name: "Ocean fishing",
      epoch: DateTime.utc().startOf('day').set({ hour: 0 }),
      interval: Duration.fromObject({ hours: 1 }),
    }
  ]
</script>

<div>
  {#each timers as definition}
    <Timer definition={definition} />
  {/each}
</div>
