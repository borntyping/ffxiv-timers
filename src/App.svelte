<script lang="ts">
  import Now from "./lib/Now.svelte";
  import Timers from "./lib/Timers.svelte";
</script>

<main>
  <div class="card">
    <h1>FFXIV Timers</h1>
  </div>

  <div class="card">
    <Now/>
  </div>

  <div class="card">
    <Timers/>
  </div>
</main>

<footer class="card">
  <p>Created by <a href="https://hachyderm.io/@borntyping">@borntyping</a>. Source at <a href="https://github.com/borntyping/ffxiv-timers">github.com/borntyping/ffxiv-timers</a>.</p>
  <p>Directly inspired by <a href="https://www.xenoveritas.org/static/ffxiv/timer.html">Xenoveritas's timer</a>.</p>
  <p>FINAL FANTASY XIV ©2010-2023 SQUARE ENIX CO., LTD.</p>
</footer>

<style>
    footer {
        color: #999999;
    }

    footer a {
        color: #666666;
    }

    footer p {
        margin: 0;
    }
</style>
