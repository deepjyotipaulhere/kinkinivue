<template>
  <v-app>
    <v-main>
      <v-toolbar prominent>
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
          <v-btn text to="/contact">Contact</v-btn>
        </v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="hidden-sm-and-up" text icon v-bind="attrs" v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-item to="/quillings">
              <v-list-item-title>Quillings</v-list-item-title>
            </v-list-item>
            <v-list-item to="/earrings">
              <v-list-item-title>Earrings</v-list-item-title>
            </v-list-item>
            <v-list-item to="/embroideries">
              <v-list-item-title>Embroideries</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
