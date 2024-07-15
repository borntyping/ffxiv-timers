<script lang="ts">
  import { DateTime } from "luxon";
  import { animate } from "./utils";
  import Clock from "./Clock.svelte";

  function fmt(datetime: DateTime): string {
    return datetime.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
  }

  const eorzeaMultiplierSeconds = 3600 / 175

  let now
  animate(() => {
    now = DateTime.utc()
  })

  function eorzeaTime(datetime: DateTime) {
    return DateTime.fromSeconds(datetime.toSeconds() * eorzeaMultiplierSeconds)
  }
</script>

<div>
  <div id="clock">
    <Clock/>
  </div>
  <div>
    UTC time: {fmt(now.toUTC())}
  </div>
  <div>
    Local time: {fmt(now.toLocal())}
  </div>
  <div>
    Eorzea time?: {eorzeaTime(now).toFormat("hh:mm:ss 'ET'")}
  </div>
</div>

<style>
    #clock {
        height: 5em;
        margin-bottom: 1em;
    }
</style>
