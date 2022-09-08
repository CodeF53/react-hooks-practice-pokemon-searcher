import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {name, hp, sprites: {front, back}}}) {
  const [isFrontSprite, setIsFrontSprite] = useState(true)

  const shownSprite = isFrontSprite? 
    (<img src={front} alt={name+"'s front sprite"}/>) :
    (<img src={back}  alt={name+"'s back sprite"}/>)

  return (
    <Card>
      <div>
        <div className="image" onClick={()=>{setIsFrontSprite(!isFrontSprite)}}>
          {shownSprite}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
