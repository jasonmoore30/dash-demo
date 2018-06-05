<template>
  <v-layout row wrap>
    <v-card>
      <v-card-title class="deep-purple white--text" primary-title>
        <v-flex xs4>
          <v-card-media>
            <!-- profile picture -->
          </v-card-media>
        </v-flex>
        <v-flex xs8>
          <div class="headline"> {{ name }} </div>
        </v-flex>
      </v-card-title>
      <v-card-text>
          <!-- profile contents, bio information -->
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      picUrl: '',
      bio: '',
      year: null,
      position: ''

    }
  }
}

</script>

<style>
</style>
