<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-carousel :cycle="true" height="auto" hide-delimiter-background>
            <v-carousel-item
              v-for="(x,i) in item.images"
              :key="i"
              :src="$axios.defaults.baseURL+x.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <h1>{{item.title}}</h1>
          <v-subheader>{{item.description}}</v-subheader>
          <br />
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title style="font-size:larger">Price</v-list-item-title>
              <v-list-item-subtitle
                style="font-weight: bolder;font-size:xx-large"
              >&#8377; {{item.price}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title style="font-size:larger">Color</v-list-item-title>
              <v-list-item-subtitle style="font-weight: bolder;font-size:xx-large">{{item.color}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title style="font-size:larger">Size</v-list-item-title>
              <v-list-item-subtitle style="font-weight: bolder;font-size:xx-large">{{item.size}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: this.item.title + " - Kinkini Roy - Art Emporium and Gallery",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.title + " - Kinkini Roy - Art Emporium and Gallery"
        }
      ]
    };
  },
  data() {
    return {
      item: {}
    };
  },
  created() {
    this.$axios.get("/embroideries/" + this.$route.params.id).then(response => {
      this.item = response.data;
    });
  }
};
</script>

<style>
</style>