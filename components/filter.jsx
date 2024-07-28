

export default function Filter({setregion}) {
  return (
    <select onChange={(e)=>setregion(e.target.value.toLowerCase())} className="filter-search" name="region">
        <option hidden name="">Filter by Region</option>
        <option value="Africa" name="Africa">Africa</option>
        <option value="America" name="America">America</option>
        <option value="Asia" name="Asia">Asia</option>
        <option value="Europe" name="Europe">Europe</option>
        <option value="Oceania" name="Oceania">Oceania</option>
        <option value="" name="All">All</option>
    </select>
  )
}
