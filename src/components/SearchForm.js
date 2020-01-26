import React, { useState } from "react";

export default function SearchForm(props) {
  
 
  return (
    <section className="search-form">
      <form>
        <input onChange={props.handleChange} type="text" placeholder="search here" value={props.value}/>
      </form>
      <button type="submit">Submit</button>
    </section>
  );
}
