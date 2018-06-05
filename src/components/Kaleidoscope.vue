<template>
  <div>
    <v-layout>
      <v-flex xs4 class="pa-2">
        <v-card v-for="number in numbers" :key="number">
          <v-flex xs12>
              <v-card-media>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
              </v-card-media>
            </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pa-2">
        <v-card v-for="number in numbers" :key="number">
          <v-flex xs12>
              <v-card-media>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
              </v-card-media>
            </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs4 class="pa-2">
        <v-card v-for="number in numbers" :key="number">
          <v-flex xs12>
              <v-card-media>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
                <v-flex xs6>
                  <img src="static/kaleidoscope-effect-250x250.jpg">
                </v-flex>
              </v-card-media>
            </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <h4 class="pt-4">(Click for a Surprise, Refresh to Stop)</h4>
    <v-btn href="javascript:(function()%7Bjavascript:var%20s%3Ddocument.createElement(%27script%27)%3Bs.setAttribute(%27src%27,%27https://nthitz.github.io/turndownforwhatjs/tdfw.js%27)%3Bdocument.body.appendChild(s)%3B%7D)()%3B"
      class="mb-5"
      >
      Kaleidoscope For What
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        numbers: [1, 1, 1, 1]
      }
    }
  }
</script>

<style>
</style>
