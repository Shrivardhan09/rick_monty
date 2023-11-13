import React from 'react'

const Location = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
          Location
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          location
        </div>
      </div>
    </div>


  )
}

export default Location
