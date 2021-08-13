<template>
  <div class="row">
    <app-quote
      @click.native="deleteQuote(index)"
      v-for="(quote, index) in quotes"
      :key="quote.key"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  components: {
    "app-quote": Quote,
  },
  methods: {
    deleteQuote(index) {
      this.$emit("deleteQuote", index);
    },
  },
};
</script>