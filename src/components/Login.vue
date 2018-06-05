<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm6>
      <!-- would like this car dto have a more
      significant shadow than average -->
      <v-card>
        <v-card-title>
          <div class="headline">Log In</div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" class="pa-4">
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              required
            ></v-text-field>
            <v-btn @click="login" :class="{ green: valid, red: !valid }">submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // Axios: email/password to backend
      // .then => function (reponse)
      // store token in $state
      // push the '/#/' path
    }
  }
}
</script>

<style>
</style>
