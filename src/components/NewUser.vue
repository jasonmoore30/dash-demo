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
          <div class="headline">Sign Up for an Account</div>
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
            <v-text-field
              label="Confirm Password"
              v-model="confirm"
              required
            ></v-text-field>
            <v-btn @click="signUp" :class="{ green: valid, red: !valid }">submit</v-btn>
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
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required'
        // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirm: ''
    }
  },
  methods: {
    signUp: function () {
      vm = this
      // probably should error check here as well but the rules
      // should validate the form before this is ever called
      // if (vm.password !== vm.confirm) {
      //   // error
      // }

      // Axios call sending the email and password
      // Await promise from above request, then hit login endpoint,
      // obtain Bearer token, store it to $state and push the '/' path


    }
  }
}
</script>

<style>
</style>
