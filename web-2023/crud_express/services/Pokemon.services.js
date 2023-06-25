const PokemonModel = require("../models/pokemon.models")

let pokemons = [
    { id: 0, nome: "Bubasauro", habitat: "AQU" },
    { id: 1, nome: "Pikashu", habitat: "SEL" },
    { id: 2, nome: "Charmander", habitat: "VOL" },
    { id: 3, nome: "Squirtle", habitat: "AQU" },
    { id: 4, nome: "Bulbasaur", habitat: "PLA" }
]

let id = 5

class PokemonService {

    static list() {
        return pokemons
    }

    static resgiter(data) {
        let pokemon = new PokemonModel(
            id++,
            data.nome,
            data.habitat,
            data.raridade
        )
        pokemons.push(pokemon)
        return pokemon
    }

    static update(id, data) {
        for (let pokemon of pokemons)
            if (pokemon.id == id) {
                pokemon.nome = data.nome
                pokemon.habitat = data.habitat
                pokemon.raridade = data.raridade
                return pokemon
            }
        return null
    }

    static delete(id) {
        for (let index = 0; index < pokemons.length; index++)
            if (pokemons[index].id = id) {
                pokemons.splice(index, 1)
                return true
            }
        return false
    }

    static retrieve(id) {
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id == id) {
                return pokemons[i];
            }
        }
        return {};
    }
}

module.exports = PokemonService