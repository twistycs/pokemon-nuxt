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
                  label-cols-sm="4"
                  label-cols-lg="3"
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
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  >
                  <b-form-input
                    id="input-password"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label-cols-sm="4"
                  label-cols-lg="3">
                  <div>
                    <NuxtLink to="/register" class="d-flex justify-content-start">Sign up</NuxtLink>
                  </div>
                </b-form-group>
        <b-button type="submit" variant="primary">Log In</b-button>
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
          password: ''
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        axios({
          method: 'post',
          url: 'http://localhost:9999/v1/login/',
          data: this.form
        })
          .then(response => {
            console.log("response: ", response)
            this.$cookies.set("username",response.data.userName)
            this.$cookies.set("token",response.data.token, {
              path: '/',
              maxAge: 60*60
            })
          window.location.href = "/pokemon_trainer";
          })
          .catch(err => {
            const data = err.response.data
            console.log(data)
            console.error(err)
            this.$bvToast.toast(data.errorMessage, {
            title: "Error",
            variant: 'danger',
            solid: true
            })
          })
      }
    }
  }
</script>