<template>
  <div>
    <h1>Trade or View Your Portfolio</h1>
    <h6>Click on <em>End Day</em> to begin new day</h6>
    <hr />
    <p>
      Your funds: <strong>{{ funds | currency }}</strong>
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>