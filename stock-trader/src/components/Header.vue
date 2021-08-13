<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" active-class="active"
            ><a>Portfolio</a></router-link
          >
          <router-link to="/stocks" tag="li" active-class="active"
            ><a>Stocks</a></router-link
          >
        </ul>
        <strong class="navbar-text navbar-right"
          >Your funds: {{ funds | currency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li><a @click.prevent="endDay" href="#">End Day</a></li>
          <li
            class="dropdown"
            @click="isDropDownOpen = !isDropDownOpen"
            :class="{ open: isDropDownOpen }"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save / Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a @click.prevent="saveData" href="#">Save Data</a></li>
              <li><a @click.prevent="load" href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      this.$http.put("data.json", data).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    load() {
      this.loadData();
    },
  },
};
</script>