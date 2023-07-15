<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import Countdown from "./Countdown.svelte";
  import { animate, recurring } from "./utils";

  export type TimerDefinition = {
    name: string
    epoch: DateTime
    interval: Duration
  }

  export let definition: TimerDefinition

  let schedule
  animate(() => {
    schedule = recurring(definition.epoch, definition.interval)
  })
</script>


<div class="until">
  <div>
    <strong>{definition.name}</strong> in <Countdown duration={schedule.next.toLocal().diffNow()} />.
  </div>

  <div>
    <em>{schedule.next.toLocal().toLocaleString({
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    })}</em>
  </div>


  <progress value={Math.round(DateTime.now().diff(schedule.previous).as('seconds'))} max={Math.round(schedule.next.diff(schedule.previous).as('seconds'))}></progress>
</div>

<style>
    .until {
        margin: 1em;
    }
</style>
