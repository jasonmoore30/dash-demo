<template>
  <v-container>
    <v-layout>
      <v-flex>
          <v-card>
            <v-card-title>
              {{ bio.name }}
            </v-card-title>
            <v-card-text>
              <v-card-media>
              </v-card-media>
            </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      bios: [
        { name: "Jason" },
      ]
    }
  }
}
</script>

<style>
</style>
