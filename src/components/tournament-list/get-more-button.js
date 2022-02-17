import { useDispatch, useSelector } from "react-redux";
import { fetchMoreTournaments } from "../data-service/data-service";

const GetMoreButton = () => {
  const dispatch = useDispatch();
  const isOutOfData = useSelector(state => state.tournaments.isOutOfData);
  const pageNumber = useSelector(state => state.tournaments.pageNumber);
  
  const getMoreTournaments = () => {
    dispatch(fetchMoreTournaments(pageNumber + 1));
  }

  return (
    <div className='text-center col-3 mx-auto'>
      <button className='btn btn-primary mb-3' 
              onClick={() => getMoreTournaments()}
              disabled={isOutOfData}>
              Need MORE tournaments!
      </button>
    </div>
  )
}

export default GetMoreButton;