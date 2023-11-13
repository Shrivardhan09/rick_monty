import './search.css'
const Search = ({ setSearch }) => {
  console.log({ setSearch })

  const onSearchChange = (e) => {
    setSearch((e.target.value))
  }
  return (
    <div>
      <form className='form-search'>
        <input type="text" name="search" id="search" className="search-bar" placeholder="Search Characters" onChange={onSearchChange} />
        <button className="btn btn-primary" onClick={e => e.preventDefault()}>Search</button>
      </form>
    </div>
  )
}

export default Search
