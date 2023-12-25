import React from "react";
import Images from './Images';

function Card(props){
    console.log(props);
    const link="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=EoUwhgxgLgIg8gWQHQCcQDsAmIUAoA8AFgIwB86YAtmAM5QgAEmArugJYCeY-A9CaQBpMAewjNKGKEgDmIKAFEANiAnooAIQ4BJTLgDkKYcKh6AlKYDcAKCtA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.23.6&externalPlugins=&assumptions=%7B%7D";
    return(
      <>
     
        <div className="cards">
        <div className="card">
        <Images imgsrc={props.imgsrc}/>
          <div className="info">
            <span className="category">{props.title}</span>
            <h3 className="title">{props.sname}</h3>
            <a href={link} target="_djbj">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      </>
    );
}

export default Card;