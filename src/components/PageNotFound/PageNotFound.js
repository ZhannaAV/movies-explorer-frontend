import './PageNotFound.css'
import {Link, useHistory} from 'react-router-dom'

function PageNotFound (){
    const history = useHistory();

    return(
        <section className='not-found'>
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link className='not-found__link' onClick={() => history.goBack()}>Назад</Link>
        </section>
    )
}

export default PageNotFound