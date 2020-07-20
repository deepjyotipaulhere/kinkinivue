<template>
  <v-row>
    <v-col v-for="(x,i) in images" :key="i" class="d-flex child-flex" cols="12" md="3" sm="6">
      <v-card tile class="d-flex" :to="'/embroideries/'+x.id">
        <v-img
          :src="$axios.defaults.baseURL+x.images[0].formats.medium.url"
          :lazy-src="$axios.defaults.baseURL+x.images[0].formats.thumbnail.url"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Embroideries - Kinkini Roy - Art Emporium and Gallery",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Embroideries - Kinkini Roy - Art Emporium and Gallery"
        }
      ]
    };
  },
  data() {
    return {
      images: []
    };
  },
  created() {
    this.$axios.get("/embroideries").then(response => {
      this.images = response.data;
    });
  }
};
</script>

<style>
</style>