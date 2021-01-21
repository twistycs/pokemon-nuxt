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
                    <b-link href="/register" class="d-flex justify-content-start">Sign up</b-link>
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
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>