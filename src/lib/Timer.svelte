<script lang="ts">
  import { DateTime } from "luxon";
  import Countdown from "./Countdown.svelte";
  import type { TimerDefinition } from "./types";
  import { animate, recurring } from "./utils";

  export let definition: TimerDefinition
  export let debug: boolean = false

  function toMeterValue(datetime: DateTime) {
    return Math.round(datetime.toSeconds())
  }

  let schedule
  let min, max, low, high, optimum, value
  animate(() => {
    schedule = recurring(definition.epoch, definition.interval)

    min = toMeterValue(schedule.previous)
    max = toMeterValue(schedule.next)
    low = toMeterValue(definition.calculateLow(schedule.previous, schedule.next))
    high = toMeterValue(definition.calculateHigh(schedule.previous, schedule.next))
    optimum = toMeterValue(definition.calculateOptimum(schedule.previous, schedule.next))
    value = toMeterValue(schedule.now)
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

  <div>
    <meter min={min} max={max} low={low} high={high} value={value}></meter>
  </div>

  {#if debug}
    <div>
      <meter min={min} max={max} value={low}>Low</meter>
    </div>
    <div>
      <meter min={min} max={max} value={high}>High</meter>
    </div>
    <div>
      <meter min={min} max={max} value={optimum}>Optimum</meter>
    </div>
  {/if}
</div>

<style>
    .until {
        margin: 1em;
    }

    meter {
        width: 15em;
    }
</style>
