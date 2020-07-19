<template>
  <v-app>
    <v-card class="mx-auto mt-10" max-width="344" shaped elevation="15">
      <v-img
        class="white--text align-end"
        height="400px"
        src="http://kinkiniroy.com:1337/uploads/IMG_9033_min_3_5e03c0b3ec.jpeg"
      >
        <!-- <v-card-title>Contact</v-card-title> -->
      </v-img>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Kinkini Roy</v-list-item-title>
          <v-list-item-subtitle>Paper and Thread artwork.</v-list-item-subtitle>
        </v-list-item-content>

        <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
      </v-list-item>

      <v-card-actions class="white justify-center">
        <v-btn
          color="grey"
          class="white--text"
          fab
          icon
          small
          href="mailto:kinkiniroy2012@gmail.com"
        >
          <v-icon color="#D44638">mdi-gmail</v-icon>
        </v-btn>
        <v-btn
          color="grey"
          class="white--text"
          fab
          icon
          small
          href="https://www.instagram.com/kaepapercraft/"
          target="_blank"
        >
          <v-icon color="#c13584">mdi-instagram</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact - Kinkini Roy - Art Emporium and Gallery",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contact - Kinkini Roy - Art Emporium and Gallery"
        }
      ]
    };
  }
};
</script>

<style>
</style>