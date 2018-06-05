<template>
  <div>
  <section>
      <v-parallax src="static/belltower.jpg" height="750">
        <v-layout
          column
          align-center
          justify-center
          class="white--text mb-5"
          >
          <img src="static/diamond.png" alt="Vuetify.js"  width="275" height="250">
          <h1 class="white--text mb-2 display-3" v-text="this.title"></h1>
          <div class="headline mb-3 text-xs-center">Mapping, Visualizations, Analysis and More!</div>
          <v-btn
            class="deep-purple mt-2"
            dark
            large
            to="roster"
            >
            Find an Existing Project
          </v-btn>
          <v-btn
            class="deep-purple mt-2"
            dark
            large
            to="register"
            >
            Create a New Visualization
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline" v-text="this.heading"></h2>
            <span class="subheading " v-text="this.info">
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center justify-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="deep-purple--text text--lighten-2">map</v-icon>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      to="alumni"
                      class="black--text text--lighten-2"
                    >
                      Create a Map
                    </v-btn>
                  </v-card-actions>
                  <v-card-text v-text="this.mapText">
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="deep-purple--text text--lighten-2">insert_chart</v-icon>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      class="black--text text--lighten-2"
                      to="register"
                    >
                      Other Visuals
                    </v-btn>
                  </v-card-actions>
                  <v-card-text v-text="this.otherVisuals">
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="static/Furman-Fountains.jpg" height="250">
        <v-layout column align-center justify-center>
          <div class="headline display-4"></div>
          <em></em>
          <v-btn
            class="deep-purple mt-2"
            dark
            large
          to="roster"
          >
            About the Program
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Disclaimer</div>
              </v-card-title>
              <v-card-text v-text="this.disclaimer">
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                If you have any clarifying questions or experience any issues, please feel free to let us know!
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="deep-purple--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>1-880-CELPROG</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="deep-purple--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Greenville, SC</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="deep-purple--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>jason.moore2@furman.edu</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome to the CEL Data Hub',
      info: 'The Community Engaged Learning Data Hub project exists to allow existing undergraduate research, community projects, and others to easily share their work, work on visualizations, or find new research areas to explore.',
      heading: 'What is the CEL Data Hub?',
      disclaimer: 'The Furman Community Engaged Learning program does not claim any of the research or publications on this site as its own nor does it condone the publication or copying of any of these projects without correct citation.........',
      mapText: 'Use our Map tool to create tilesets or styles using research projects, census data and more! Use the full power of Mapbox and our Web Charting tool!',
      otherVisuals: 'If you don\'t want to create a map but you would still like to visualize a project, you can create robust charts and graphs using our Web Charting tool!'

    }
  },
  methods: {
    goToProfile () {
      this.$router.push({path: 'profile'})
    }
  }
}

</script>

<style>
</style>
