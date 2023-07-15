<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import Timer from "./Until.svelte";

  let weeklyResetEpoch = DateTime.utc().startOf('week').set({ weekday: 1, hour: 8 })
  let dutyResetEpoch = DateTime.utc().startOf('day').set({ hour: 15 })
  let grandCompanyResetEpoch = DateTime.utc().startOf('day').set({ hour: 20 })

  let weekly = Duration.fromObject({ weeks: 1 })
  let daily = Duration.fromObject({ day: 1 })
</script>

<div>
  <Timer name="Weekly Reset" epoch={weeklyResetEpoch} interval={weekly} />
  <Timer name="Daily Reset" epoch={dutyResetEpoch} interval={daily} />
  <Timer name="Daily Reset (Grand Companies)" epoch={grandCompanyResetEpoch} interval={daily} />
</div>
