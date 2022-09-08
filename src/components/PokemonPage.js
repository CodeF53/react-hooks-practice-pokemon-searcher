import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  // fetch pokemon from database on first load
  useEffect(() => {
    fetch("http://localhost:3001/pokemon").then(r=>r.json()).then((data)=>{
    setPokemon(data)
  })
  }, [])

  // filter pokemon by search query
  const filteredPokemon = pokemon.filter((aSingleIndividualOneOfAKindPokemon)=>{
    return aSingleIndividualOneOfAKindPokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  })
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={(newPokemon)=>{setPokemon([...pokemon, newPokemon])}}/>
      <br />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
