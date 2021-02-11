<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{doubleCount}}</p>
    <p>{{tripleCount}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:
  {
    ...mapGetters(["doubleCount","tripleCount"]),

  },
    // mapGetters({
    //   myComponentDoubleCount: "doubleCount"
    // }),
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>
