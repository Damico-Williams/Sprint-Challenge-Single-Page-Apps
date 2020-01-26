import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState({ name: "",})
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
            setData(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
  }, []);

  useEffect(() => {
      const results = character.filter(chars => 
        chars.name.toLowerCase().includes(search));

      setCharacter(results)
  }, [search])

  const handleChange = event => {
    setSearch(event.target.value)
  }

  // const characters = people => {
  //   const onSearch = setCharacter([...character, people]);
  // };

  return (
    <section className="character-list">
      {character.map(char => (
        <ul>
        <li key={char}><CharacterCard
        key={char.id}
        name={char.name}
        species={char.species}
        /></li>
       </ul>
      ))}
      <Link to="/">Home</Link>
      <SearchForm handleChange={handleChange} value={search}/>
      {/* <div>
        <ul>
          {data.map(wh => 
            <li key={wh}>{wh.name} {wh.species}</li>
          )}
        </ul>
      </div> */}
    </section>
  );
}
