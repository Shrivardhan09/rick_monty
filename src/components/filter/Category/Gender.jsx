import React from 'react'
import AnchorLink from './AnchorLink'

const Gender = ({ setGender }) => {
  const gender = ["female", "male", "genderless", "unknown"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive">
          Gender
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {gender?.map((items, id) => <AnchorLink key={id} items={items} name='gender' id={id} task={setGender} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Gender
