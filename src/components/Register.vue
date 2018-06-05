<template>
    <v-layout row wrap>
      <v-flex xs12 lg12 class="ma-3">
        <v-card>
          <v-card-title class="deep-purple white--text" primary-title>
            <div class="headline"> Search Community Projects and Student Research</div>
          </v-card-title>
          <v-card-text>
            <div id="my-form">
              <v-form v-model="valid" class="pa-4">
                <v-text-field
                  label="Search"
                  id="search"
                  v-model="queryString"
                ></v-text-field>
                <v-btn @click="search" :class="{ green: valid, red: !valid }">submit</v-btn>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        alert: false,
        queryString: '',
        alertText: 'Request Sent!'
        // email: '',
        // emailRules: [
        //   (v) => !!v || 'E-mail is required'
        //   // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'

      }
    },
    methods: {
      search () {
        let vm = this
        // This is where we construct the JSON object for information transport
        let searchText = {
          query: this.queryString,
          filters: []
        }
        // Axios POST api/search
        console.log(searchText)
        // For now, we just send a success alert since we aren't contacting the server
        // Information regarding projects, datasets, and more will be sent back and displayed neatly based on metadata available from
        // Dataverse search API
        // Proxy will interface with the Dataverse API directly, there is no need for anything beyond provision of
        // query string and any other important parameters.
        vm.alert = true
      }
    }
  }
</script>

<style>
</style>
