<template>
<b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="vh-100 text-center">
      <b-col></b-col>
      <b-col cols="5" align-self="center">
            <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="Username : "
                  label-for="input-username"
                  label-cols-sm="5"
                  label-cols-lg="4"
                  label-align-sm="right">
                  <b-form-input
                    label="Username : "
                    id="input-username"
                    v-model="form.username"
                    type="text"
                    placeholder="Username"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password : " label-for="input-password"                
                  label-cols-sm="5"
                  label-cols-lg="4"
                  label-align-sm="right"
                  >
                  <b-form-input
                    id="input-password"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Confirm Password : " label-for="input-confirm-password"                
                  label-cols-sm="5"
                  label-cols-lg="4"
                  label-align-sm="right"
                  >
                  <b-form-input
                    id="input-confirm-password"
                    v-model="form.confirmPassword"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Email : " label-for="input-email"                
                  label-cols-sm="5"
                  label-cols-lg="4"
                  label-align-sm="right"
                  >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>

        <b-button type="submit" variant="primary">Register</b-button>
        <b-button href="/login">Back</b-button>
      </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        if(this.form.password != this.form.confirmPassword){
          this.$bvToast.toast('Your password not match. Please try again', {
          title: `Error password`,
          variant: 'danger',
          solid: true
          })
          // return
        }
        axios({
          method: 'post',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          },
          url: 'http://localhost:9999/v1/users/',
          data: this.form
        })
          .then(response => {
            console.log("response: ", response)
            // do something about response
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }
</script>