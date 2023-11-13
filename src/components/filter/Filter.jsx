import React from 'react'
import Gender from './Category/Gender'
import Location from './Category/Location'
import Status from './Category/Status'
import Type from './Category/Type'
import Species from './Category/Species'

const Filter = ({ setStatus, pages, setGender, setPages, setSpecies }) => {
  return (
    <div>
      <div className="text-center fw-bold fs-4 mb-2 text-light">Filters</div>
      <div className="accordion w-100 p-3" id="accordionExample">
        <Gender setGender={setGender} />
        <Species setSpecies={setSpecies} />
        {/* <Type /> */}
        <Status setStatus={setStatus} />
        {/* <Location /> */}
      </div>
    </div >
  )
}

export default Filter
