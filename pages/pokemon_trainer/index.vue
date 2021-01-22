<template>
  <div>
      <h2>Welcome Pokemon Trainer : {{username}}</h2>
      <br>
  <b-card-group deck>
    <b-card no-body header="Pokemon Trainer List">
        <b-list-group flush v-for="(item, index) in dataUser" :key="index">
            <b-list-group-item href="/pokemon_trainer/Tharit11" :disabled="item.UserName != username">{{ item.UserName }}</b-list-group-item>
        </b-list-group>
    </b-card>
  </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        username : this.$cookies.get('username'),
        dataUser : []
      }
    },
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
    methods :{
    }
}
</script>

<style>

</style>