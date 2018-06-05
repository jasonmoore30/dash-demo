<template>
  <div id="container">
    <h1>Existing Projects</h1>
    <p>An assortment of important projects going on in Greenville right now</p>
    <v-layout row wrap>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="player in players" :key="player.id">
          <v-card class="ma-3">
            <v-card-title class="deep-purple white--text" primary-title>
              <!-- <v-flex xs12 md4>
                <v-card-media>
                  <img v-if="player.imgURL !== ''" src="player.imgURL" alt="">
                </v-card-media>
              </v-flex> -->
              <v-flex xs12
                align-center
                justify-center
              >
                <div class="headline"> {{ player.name }} </div>
              </v-flex>
            </v-card-title>
            <v-card-text>
              <p v-if="player.position !== ''"> Author/Creator: {{ player.position }} </p>
              <p v-if="player.year !== ''"> Complete Date: {{ player.year }} </p>
              <p v-if="player.bio !== ''">Info: {{ player.bio }}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // populate data from database, this is fake data for demo purposes
        players: [
          { id: 1, name: 'Gentrification in Greenville', position: 'Melanie Brown', year: 'April 2018', bio: '...', imgURL: '' },
          { id: 2, name: 'Low Income Neighborhoods', position: 'Hannah Wheeler', year: 'January 2018', bio: '...', imgURL: '' },
          { id: 3, name: 'Homelessness and Outreach', position: 'Unknown', year: 'May 2017', bio: '...', imgURL: '' },
          { id: 4, name: 'The United Way Project', position: 'Mike Winiski', year: 'January 2019', bio: '...', imgURL: '' },
          { id: 5, name: 'Econometrics Undergraduate Research', position: 'Jason Moore', year: 'April 2018', bio: '...', imgURL: '' }
        ]

      }
    }

  }
</script>

<style>
</style>
