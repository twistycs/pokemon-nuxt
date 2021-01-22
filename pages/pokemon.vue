<template>
  <div>
  <h2>Welcome to Pokemon Master</h2>
  <!-- <h2>{{pokemonList}}</h2> -->
<br>
  <div  v-for="(pokemon, index) in pokemonList" :key="index">
    <b-card :img-src="pokemon.ImageUrl" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <h2>Name : {{pokemon.Name}}</h2>
        <h2>HP : {{pokemon.Hp}}</h2>
        <h2>Super-Type : {{pokemon.SuperType}}</h2>
        <h2>Sub-Type : {{pokemon.SubType}}</h2>
        <h2>Type : {{pokemon.Type}}</h2>
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
            url: 'http://localhost:9999/v1/pokemons/',
            headers: {
                'Authorization' : 'Bearer '+ cookieToken
            }
            })
            .then(response => {
                this.pokemonList = response.data
                console.log("response: ", response)
            })
            .catch(err => {
                console.error(err)
            })
    },
    data(){
        return {
            pokemonList : []
        }
    }
}
</script>

<style>

</style>