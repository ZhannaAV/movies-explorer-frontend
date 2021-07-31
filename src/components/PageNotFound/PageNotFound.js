import './PageNotFound.css'
import {useHistory} from 'react-router-dom'

function PageNotFound (){
    const history = useHistory();

    return(
        <section className='not-found'>
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button className='not-found__back-btn' onClick={() => history.goBack()}>Назад</button>
        </section>
    )
}

export default PageNotFound