<template>
  <v-app>
    <v-row>
      <v-col cols="12" md="5">
        <v-img src="/kinkiniroylogo.png" width="500"></v-img>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br>
        <v-btn to="/quillings" text="" color="primary">Expore Quillings</v-btn>
        <v-btn to="/earrings" text="" color="success">Expore Earrings</v-btn>
        <v-btn to="/embroideries" text="" color="warning">Expore Embroideries</v-btn>
      </v-col>
      <v-col cols="12" md="7" sm="1">
        <v-img src="/front.png" class="hidden-xs-only" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>