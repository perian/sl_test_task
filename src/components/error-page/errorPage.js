import { Link } from 'react-router-dom';

export default function ErrorPage() {

  return (
    <div className='container text-center'>
      <p className='fs-2'>Страница не найдена</p>
      <Link className='btn btn-primary mb-3' to='/'>Ввернуться на гланую главную</Link>
    </div>
  )
}
