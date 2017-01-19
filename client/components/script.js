import { mapState } from 'vuex';

export default {
  data() {
    return {
      amount: 1,
    };
  },
  computed: mapState([
    'count',
  ]),
  methods: {
    increment() {
      return this.$store.dispatch('increment', { amount: +this.amount || 1 });
    },
  },
};
