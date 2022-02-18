import { useDispatch, useSelector } from "react-redux";
import { filterByTitleAction } from "../../actions/actions";

const Input = () => {
  const dispatch = useDispatch();
  const searchByTitle = useSelector(state => state.tournaments.searchByTitle);

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor='search'>
        Search: 
      </label>
      <input 
        className='form-control'
        type='text'
        id='search'
        value={searchByTitle}
        onChange={(evt) => {dispatch(filterByTitleAction(evt.target.value))}}
        placeholer='Search'/>
    </div>
  )
}

export default Input;