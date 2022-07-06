import styles from './index.module.css';
import backgroundImage from '../../assets/img/fundo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchHome() {
    return (
        <div className={styles['div-image-background']}>
            <div>
                <div className="uk-margin">
                    <form className="uk-search uk-search-default">
                        <span>O que você está Procurando?</span>
                        <a href="" className="uk-search-icon-flip"></a>
                        <div>
                            <input className="uk-search-input" type="search"/>
                            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        </div>
                    </form>
                </div>
            </div>
            <img className={styles.imgSearch} src={backgroundImage}/>
        </div>
    );
}

