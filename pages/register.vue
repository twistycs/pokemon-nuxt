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
                    :state="usernameState"
                    trim
                    required
                  ></b-form-input>
                   <b-form-invalid-feedback id="input-username">
                    Enter username between 6-10 letters.
                  </b-form-invalid-feedback>
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
                    :state="passwordState"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-password">
                    Enter password between 6-10 letters.
                  </b-form-invalid-feedback>
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
                    :state="confirmPasswordState"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-confirm-password">
                    Password and confirm password not matching.
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="input-group-3" label="Email : " label-for="input-email"                
                  label-cols-sm="5"
                  label-cols-lg="4"
                  label-align-sm="right"
                  >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    type="text"
                    :state="emailState"
                    required
                  ></b-form-input>
                   <b-form-invalid-feedback id="input-email">
                    Email format error.
                  </b-form-invalid-feedback>
                </b-form-group>

        <b-button type="submit" variant="primary">Register</b-button>
        <b-button to="/login">Back</b-button>
      </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
  export default {
    auth: false, //set global middleware exclude this page look at route in nuxt.config.js
    computed: {
      usernameState() {
        if(this.form.username.length == 0){
          return null
        }else{
          return this.form.username.length >= 5 && this.form.username.length <= 10 ? true : false
        }
      },
      passwordState() {
        this.form.confirmPassword = ''
        if(this.form.password.length == 0){
          return null
        }else{
          return this.form.password.length > 6 && this.form.password.length <= 10 ? true : false
        }
      },
      confirmPasswordState() {
       if(this.form.confirmPassword.length == 0){
          return null
       }
      return this.form.password == this.form.confirmPassword ? true : false
      },
      emailState() {
       if(this.form.email.length == 0){
          return null
       }
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(this.form.email) ? true : false
      },
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
          confirmPassword: '',
          email: ''
        },
      }
    },
    
    methods: {
      onSubmit(event) {
        event.preventDefault()
        axios({
          method: 'post',
          url: 'http://localhost:9999/v1/users/',
          data: this.form
        })
          .then(response => {
            console.log("response: ", response)
            window.location.href = "/login";
            // do something about response
          })
          .catch(err => {
            console.error(err)
            this.$bvToast.toast('Username Already existing.', {
            title: `Username Already existing.`,
            variant: 'danger',
            solid: true
            })
          })
      }
    }
  }
</script>