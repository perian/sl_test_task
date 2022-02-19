import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByTitleAction } from "../../actions/actions";
import debounce from 'lodash.debounce'

const Input = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('')

  const onChange = evt => {
    setSearchValue(evt.target.value)
  }

  const updateQuery = () => {
    dispatch(filterByTitleAction(searchValue))
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [searchValue]);

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [delayedQuery]);

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor='search'>
        Search: 
      </label>
      <input 
        className='form-control'
        type='text'
        id='search'
        value={searchValue}
        onChange={onChange}
        placeholer='Search'/>
    </div>
  )
}

export default Input;