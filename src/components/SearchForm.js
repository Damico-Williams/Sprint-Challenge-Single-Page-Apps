import React, { useState } from "react";

export default function SearchForm(props) {
  const [search, setSearch] = useState({ name: "",})

  const handleChange = event => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
     const onSearch = {
       ...search,
       id: Date.now()
     };
    props.characters(onSearch);
    setSearch({ name: "",});
  };
 
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" id="" value={search.name}/>
      </form>
      <button type="submit">Submit</button>
     // Add a search form here
    </section>
  );
}
