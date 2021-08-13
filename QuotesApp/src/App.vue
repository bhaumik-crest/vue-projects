<template>
  <div class="container">
    <app-header :maxCount="maxQuotes" :quoteCount="quotes.length"></app-header>
    <app-new-quote @newQuote="addQuote"></app-new-quote>
    <app-quote-grid
      @deleteQuote="deleteQuote"
      :quotes="quotes"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuotesGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote,
    "app-header": Header,
  },
  data: function () {
    return {
      maxQuotes: 10,
      quotes: ["Test quote"],
    };
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete quotes first!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
