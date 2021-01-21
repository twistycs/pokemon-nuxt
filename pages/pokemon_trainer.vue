<template>
<div>
  <b-card-group deck>
    <b-card no-body header="Pokemon Trainer List">
        <b-list-group flush v-for="(item, index) in dataUser" :key="index">
            <b-list-group-item href="www.google.co.th" >{{ item.UserName }}</b-list-group-item>
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
        dataUser : []
      }
    },
    mounted() {
          axios({
            method: 'get',
            url: 'http://localhost:9999/v1/users/',
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6IlRoYXJpdDYiLCJleHAiOjE2MTEyNTUyMzAsImlhdCI6MTYxMTIxOTIzMCwiaXNzIjoiVGhhcml0NiJ9.QrRIwHZ8xr5VyzuxFW8Z61XHVwEXBhfWEUwOOnpjJyw'
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