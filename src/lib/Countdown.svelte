<script lang="ts">
  import type { Duration } from "luxon";
  import humanizeDuration from "humanize-duration"

  export let duration: Duration
</script>

<span>
  {humanizeDuration(duration.toMillis(), { units: ["d", "h", "m"], maxDecimalPoints: 0 })}
</span>
