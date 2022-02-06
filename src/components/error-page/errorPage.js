import { Link } from 'react-router-dom';

export default function ErrorPage() {

  return (
    <div className='container d-grid mx-auto justify-content-md-center'>
      <p className='fs-2'>Страница не найдена</p>
      <Link className='btn btn-primary mx-auto mb-3' to='/'>Ввернуться на гланую главную</Link>
    </div>
  )
}
