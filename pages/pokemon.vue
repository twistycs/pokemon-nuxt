<template>
  <div>
  <h2>Welcome to Pokemon Master</h2>
  <!-- <h2>{{pokemonList}}</h2> -->
  <h2>{{addPokemonList}}</h2>
  <h2>{{removePokemonList}}</h2>
  <a :href="/pokemon_trainer/+username">Back</a>
<br>
  <div  v-for="(pokemon, index) in pokemonList" :key="index">
    <b-card :img-src="pokemon.ImageUrl" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <h2>Name : {{pokemon.Name}}</h2>
        <h2>HP : {{pokemon.Hp}}</h2>
        <h2>Super-Type : {{pokemon.SuperType}}</h2>
        <h2>Sub-Type : {{pokemon.SubType}}</h2>
        <h2>Type : {{pokemon.Type}}</h2>
        <br>
        <b-button @click="addPokemon(pokemon.ID,pokemon.Name)" variant="success">Add Pokemon</b-button>
        <b-button @click="removePokemon(pokemon.ID,pokemon.Name)" variant="danger">Remove Pokemon</b-button>
      </b-card-text>
    </b-card>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  middleware : 'auth',
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
            username : this.$cookies.get('username'),
            pokemonList : [],
            addPokemonList : [],
            removePokemonList : []
        }
    },
    methods:{
      addPokemon(id,name){
        this.addPokemonList.push(name)
      },
      removePokemon(id,name){
        this.removePokemonList.push(name)
      }
    }
}
</script>

<style>

</style>