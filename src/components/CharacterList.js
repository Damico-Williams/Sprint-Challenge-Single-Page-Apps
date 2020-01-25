import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
  }, []);

  const characters = people => {
    const onSearch = setCharacter([...character, people]);
  };

  return (
    <section className="character-list">
      {character.map(char => (
        <CharacterCard
        key={char.id}
        name={char.name}
        species={char.species}
        />
       
      ))}
      <Link to="/">Home</Link>
      <SearchForm characters={characters}/>
    </section>
  );
}
