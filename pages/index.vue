<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-img src="/kinkiniroylogo.png" width="500"></v-img>
        <br />
        <p>I am a self-taught artist, starting with water and oil, slowly treading into paper as an art form. When I was painting on paper, to now when I am painting with paper, the journey has been incredible and magnificent. Using paper to draw with, to bring out forms and shapes, becomes quite an interesting path for each of my pieces. Paper is such a good medium to experiment with to create art. I am a paper painter using paper to craft out different art forms which can be collected and admired, along with wearables.</p>
        <p>In my gallery you will also find embroidery art pieces which used thread to paint over different media.</p>
        <p>Enjoy and <nuxt-link to="/contact">let me know</nuxt-link> for any enquiries.</p>
        <br />
        <v-btn to="/quillings" text color="primary">Expore Quillings</v-btn>
        <v-btn to="/earrings" text color="success">Expore Earrings</v-btn>
        <v-btn to="/embroideries" text color="warning">Expore Embroideries</v-btn>
      </v-col>
      <v-col cols="12" md="6" sm="1">
        <v-img src="/front2.jpg" style="box-shadow:0 3px 5px grey" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "Kinkini Roy - Art Emporium and Gallery",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Kinkini Roy - Art Emporium and Gallery"
        }
      ]
    };
  },
};
</script>

<style>
</style>