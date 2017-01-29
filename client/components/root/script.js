import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      amount: 1,
      loading: false,
    };
  },
  computed: {
    ...mapState([
      'count',
    ]),
    ...mapGetters([
      'multiplyByTen',
    ]),
  },
  methods: {
    async increment($event) {
      if ($event) {
        $event.preventDefault();
      }

      if (!this.loading) {
        this.loading = true;
        await this.$store.dispatch('increment', { amount: +this.amount || 1 });
        this.loading = false;
      }
    },
  },
};
