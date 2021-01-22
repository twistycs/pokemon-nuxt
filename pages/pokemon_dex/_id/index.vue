<template>
<div>
  <h2>Welcome to ID :  {{$route.params.id}}</h2>
  <div v-show="$route.params.id === this.username">
    <nuxt-link to="/pokemon" >Add Pokemon</nuxt-link>
  </div>
  
  <br>
  <div>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
          const cookieToken = this.$cookies.get('token')
          axios({
            method: 'get',
            url: 'http://localhost:9999/v1/users/',
            headers: {
                'Authorization' : 'Bearer '+ cookieToken
            }
            })
            .then(response => {
                this.dataUser = response.data
                console.log("response: ", response)
            })
            .catch(err => {
                console.error(err)
            })
    },
    data(){
      return {
        username : this.$cookies.get('username')
      }
    }
}
</script>

<style>

</style>