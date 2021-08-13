<template>
  <div>
    <div v-if="stocks.length == 0" class="col-sm-12 text-center">
      <div class="alert alert-info">
        You dont have any stocks in your portfolio.
      </div>
    </div>
    <app-stock
      v-else
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    "app-stock": Stock,
  },
};
</script>