import React from 'react'
import AnchorLink from './AnchorLink'

const Status = ({ setStatus, }) => {

  const status = ["Alive", "Dead", "Unknown"]


  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour">
          status
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {/* Radio Button */}
          {status.map((items, id) => {
            return (
              <AnchorLink key={id} id={id} name={'status'} items={items} task={setStatus} />
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Status
