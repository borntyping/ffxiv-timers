<script lang="ts">
  import { DateTime } from "luxon";
  import Countdown from "./Countdown.svelte";
  import type { TimerDefinition } from "./types";
  import { animate, recurring } from "./utils";

  export let definition: TimerDefinition

  let schedule
  animate(() => {
    schedule = recurring(definition.epoch, definition.interval)
  })

  function toSeconds(datetime: DateTime) {
    return Math.round(datetime.toSeconds())
  }
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

  <meter
    min={toSeconds(schedule.previous)}
    max={toSeconds(schedule.next)}
    low={toSeconds(schedule.previous.plus(definition.highLowOffset))}
    high={toSeconds(schedule.next.minus(definition.highLowOffset))}
    value={toSeconds(schedule.now)}>
  </meter>
</div>

<style>
    .until {
        margin: 1em;
    }

    meter {
        width: 15em;
    }
</style>
