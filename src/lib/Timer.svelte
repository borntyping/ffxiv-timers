<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import { animate, recurring } from "./utils";

  export let name: string
  export let epoch: DateTime
  export let interval: Duration

  let schedule
  animate(() => {
    schedule = recurring(epoch, interval)
  })
</script>


<div class="until">
  <div>
    <strong>{name}</strong> in <span>{schedule.next.toLocal().diffNow().toFormat("d 'days,' h:mm:ss")}</span>.
  </div>

  <div>
    <em>{epoch.toLocal().toLocaleString({
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
