import React from "react";
import styled from 'styled-components';

export default function CharacterCard({name, species}) {
  const Txt = styled.h3`
    font-weight: bold;
    color: blue;
    text-align: center
  `
  return (<Txt><span>{name} {species}</span></Txt>)
}
