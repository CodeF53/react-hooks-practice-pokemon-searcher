import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [name,setName] = useState("")
  const [hp,setHP] = useState("")
  const [frontImg,setFrontImg] = useState("")
  const [backImg,setBackImg] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // send new pokemon to server
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: frontImg,
          back: backImg
        }
      })
    }).then(r=>r.json()).then((data)=>{ // parse response and add to local pokemon
      addPokemon(data)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input value={name} onChange={(e)=>{setName(e.target.value)}} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={hp} onChange={(e)=>{setHP(e.target.value)}} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input value={frontImg} onChange={(e)=>{setFrontImg(e.target.value)}}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input value={backImg} onChange={(e)=>{setBackImg(e.target.value)}}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
