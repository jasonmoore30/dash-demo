
<template>
  <div class="pa-4">
    <v-card>
      <v-card-title class="orange darken-1 white--text" primary-title>
        <div class="headline">{{ title }}</div>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" class="pa-4" ref="form">
          <v-layout row wrap>
            <v-flex xs12 md12 lg12>
              <div class="headline">Please Select Your Course Grades and Credit Hours</div>
            </v-flex>
            <v-flex xs6 md6 lg6>
              <v-select
                label="Select Grade"
                v-model="gradeOne"
                :items="grades"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Grade"
                v-model="gradeTwo"
                :items="grades"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Grade"
                v-model="gradeThree"
                :items="grades"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Grade"
                v-model="gradeFour"
                :items="grades"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
            </v-flex>
            <v-flex xs1 md1 lg1></v-flex>
            <v-flex xs5 md5 lg5>
              <v-select
                label="Select Hours"
                v-model="hourOne"
                :items="hours"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Hours"
                v-model="hourTwo"
                :items="hours"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Hours"
                v-model="hourThree"
                :items="hours"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
              <v-select
                label="Select Hours"
                v-model="hourFour"
                :items="hours"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
            </v-flex>
          </v-layout>
        </v-form>
        <v-alert
          v-if="this.valid"
          v-model="alert"
          info
          transition="scale-transition"
        >
        {{ gpaOutput }}
        </v-alert>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'GPA Calculator',
      valid: false,
      gradeOne: '',
      gradeTwo: '',
      gradeThree: '',
      gradeFour: '',
      hourOne: null,
      hourTwo: null,
      hourThree: null,
      hourFour: null,
      grades: ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'],
      hours: [4, 3, 2, 1],
      gpaOutput: '',
      alert: false
    }
  },
  watch: {
    valid: function () {
      this.calculate()
    }
  },
  methods: {
    calculate () {
      var totalHours = this.hourOne + this.hourTwo + this.hourThree + this.hourFour

      var classOne = (this.gradeToGpa(this.gradeOne)) * this.hourOne
      var classTwo = (this.gradeToGpa(this.gradeTwo)) * this.hourTwo
      var classThree = (this.gradeToGpa(this.gradeThree)) * this.hourThree
      var classFour = (this.gradeToGpa(this.gradeFour)) * this.hourFour

      var totalCredits = classOne + classTwo + classThree + classFour
      var gpa = (totalCredits / totalHours).toFixed(2)
      var gpaString = 'This is your GPA: ' + gpa
      this.gpaOutput = gpaString
      this.alert = true
      console.log(gpaString)
    },
    gradeToGpa (grade) {
      if (grade === 'A') {
        return 4
      } else if (grade === 'A-') {
        return 3.7
      } else if (grade === 'B+') {
        return 3.3
      } else if (grade === 'B') {
        return 3
      } else if (grade === 'B-') {
        return 2.7
      } else if (grade === 'C+') {
        return 2.3
      } else if (grade === 'C') {
        return 2
      } else if (grade === 'C-') {
        return 1.7
      } else if (grade === 'D') {
        return 1
      } else if (grade === 'F') {
        return 0
      }
    }
  }
}

</script>

<style>

</style>
