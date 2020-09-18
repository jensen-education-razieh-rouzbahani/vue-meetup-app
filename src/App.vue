<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
        </v-toolbar-title>
      <v-toolbar-items>
        <v-btn>View Meetups</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main></main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
};
</script>
