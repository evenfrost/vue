export default {
  watch: {
    $route(to, from) {
      console.log('to, from', to, from);
    },
  },
};
