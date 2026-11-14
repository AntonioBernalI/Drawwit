<script lang="ts">
  import drawwitGif from '../assets/drawwitgif.gif';
  import backgroundGif from '../assets/background.gif';
  import "./drawwitMainPageStyle.css"

  export let title: string = 'Drawwit';

  export let buttons: { label: string; onClick: () => void }[] = [
    { label: 'Daily Game', onClick: () => {} },
    { label: 'About', onClick: () => {} },
  ];
</script>

<!--
  Structure:
  .mac-window
    .title-bar
    .body-frame
      .canvas
        .canvas-inner
          img.hero-gif
          .btn-stack
            button.mac-btn (×n)
-->

<div class="mac-window">

  <div class="title-bar">
    <div class="tb-gap tb-gap-left"></div>

    <div class="tb-title-wrap">
      <span class="tb-title">{title}</span>
    </div>

    <div class="tb-gap tb-gap-right">
      <button class="tb-btn btn-zoom" aria-label="Zoom" disabled>
        <span class="zoom-inner"></span>
      </button>
      <button class="tb-btn btn-collapse" aria-label="Collapse" disabled>
        <span class="collapse-bar"></span>
      </button>
    </div>
  </div>

  <div class="body-frame">
    <div class="canvas" style="--bg-gif: url({backgroundGif})">
      <div class="canvas-inner">

        <div class="ui-box">
          <img
            class="hero-gif"
            src={drawwitGif}
            alt="Drawwit"
            draggable="false"
          />

          <div class="btn-stack">
            {#each buttons as btn}
              <button class="mac-btn" on:click={btn.onClick}>
                {btn.label}
              </button>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </div>

</div>


