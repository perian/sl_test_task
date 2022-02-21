import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByTitleAction } from "../../actions/actions";
import debounce from 'lodash.debounce';

const Input = () => {
  const DEBOUNCE_INTERVAL = 500;
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('')

  const onChange = evt => {
    setSearchValue(evt.target.value)
  }

  const updateQuery = () => {
    dispatch(filterByTitleAction(searchValue))
  };

  const delayedQuery = useCallback(debounce(updateQuery, DEBOUNCE_INTERVAL), [searchValue]);

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [delayedQuery]);

  return (
    <div className="d-flex align-items-center my-3">
      <label className="form-label me-3 my-0" htmlFor='search'>
        Search: 
      </label>
      <input 
        className='col-3'
        type='text'
        id='search'
        value={searchValue}
        onChange={onChange}
        placeholer='Search'/>
    </div>
  )
}

export default Input;