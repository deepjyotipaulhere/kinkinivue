<template>
  <v-app>
    <v-main>
      <v-navigation-drawer v-model="sidebar" app>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>dd</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar prominent>
        <span class="hidden-sm-and-up">
          <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
        </span>
        <v-toolbar-title>
          <router-link to="/" style="cursor: pointer">
            <v-img src="/kinkiniroylogo.png" width="190px"></v-img>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text to="/quillings">Quillings</v-btn>
          <v-btn text to="/earrings">Earrings</v-btn>
          <v-btn text to="/embroideries">Embroideries</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false
    };
  }
};
</script>
