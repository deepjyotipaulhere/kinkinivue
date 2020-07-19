<template>
  <v-row>
    <v-col v-for="(x,i) in images" :key="i" class="d-flex child-flex" cols="12" md="3" sm="6">
      <v-card tile class="d-flex" :to="'/quillings/'+x.id">
        <v-img
          :src="'http://www.kinkiniroy.com:1337'+x.images[0].formats.medium.url"
          :lazy-src="'http://www.kinkiniroy.com:1337'+x.images[0].formats.thumbnail.url"
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
      title: "Quillings - Kinkini Roy - Art Emporium and Gallery",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Quillings - Kinkini Roy - Art Emporium and Gallery"
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
    this.$axios.get("/quillings").then(response => {
      this.images = response.data;
    });
  }
};
</script>

<style>
</style>