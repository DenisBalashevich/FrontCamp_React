import React from 'react';

export default function Poster(props) {
  return (
    <img src={props.url} width={props.width} alt="Movie poster" />
  );
}
