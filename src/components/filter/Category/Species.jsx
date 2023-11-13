import React from 'react'
import AnchorLink from './AnchorLink';

const Species = ({ setSpecies }) => {

  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne">
          Species
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {species?.map((items, id) => <AnchorLink items={items} key={id} id={id} name={'species'} task={setSpecies} />)}
        </div>
      </div>
    </div>
  )
}

export default Species
