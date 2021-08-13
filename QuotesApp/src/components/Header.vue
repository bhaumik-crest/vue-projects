<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="progess">
        <h3>Quotes Added</h3>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: (quoteCount / maxCount) * 100 + '%' }"
          >
            {{ quoteCount }} / {{ maxCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["quoteCount", "maxCount"],
};
</script>