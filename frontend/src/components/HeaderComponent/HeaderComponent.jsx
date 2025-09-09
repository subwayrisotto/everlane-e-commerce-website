import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { aboutCategories } from '../../data/aboutCategories';
import { navigation } from '../../data/navigation';
import { productsCategories } from '../../data/productsCategories';
import { userNavigation } from '../../data/userNavigation';
import styles from './HeaderComponent.module.scss';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname + location.search;
    const [activeLink, setActiveLink] = useState(currentPath);

    useEffect(() => {
        setActiveLink(currentPath);
    }, [currentPath]);

  return (
    <header className={styles.header}>
      <div className={styles.earlyAccessCtn}>
        <div className={styles.eaTextCtn}>
          <p className={styles.eaText}>Get early access on launches and offers.</p>
          <div className={styles.eaLinkCtn}>
            <a href='/' className={styles.eaLink}>Sign Up For Texts</a>
            <img src="/icons/arrowRight.svg" alt="arrow" />
          </div>
        </div>

        <div className={styles.currencyCtn}>
          <div className={styles.flag}>
            <img src="/flags/usa.svg" alt="USA" />
          </div>
          <p className={styles.text}>USA</p>
        </div>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.leftNavigation}>
            <ul className={styles.navigationList}>
                {
                    navigation.map((nav, index) => {
                        return(
                            <li className={`${styles.navigationListItem} ${activeLink === nav.link ? styles.activeLink : ''}`} key={index}>
                                <NavLink to={nav.link} onClick={() => setActiveLink(nav.link)}>{nav.text}</NavLink>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>

        <div className={styles.logoCtn}>
            <NavLink to='/'>
                <img src="/icons/logo.svg" alt="Logo" />
            </NavLink>
        </div>

        <div className={styles.rightNavigation}>
            <ul className={styles.navigationList}>
                {
                    userNavigation.map((nav, index) => {
                        return(
                            <li className={`${styles.navigationListItem}`} key={index}>
                                <NavLink to={nav.link}>
                                    <img src={`/icons/${nav.icon}`} alt={nav.text}/>
                                </NavLink>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>
      </nav>

      <div className={styles.productsCategories}>
        <ul className={styles.productsCategoriesList}>
            {
                activeLink === "/about-us" ? (
                    aboutCategories.map((category, index) => {
                        return (
                            <li className={styles.productsCategoriesListItem} key={index}>
                                <Link to={`/about-us/${category.link}`}>{category.text}</Link>
                            </li>
                        )
                    })
                ) : (
                    productsCategories.map((category, index) => {
                        return (
                            <li className={styles.productsCategoriesListItem} key={index}>
                                <Link to={`/products/?category=${category.link}`} style={{color: category.text === "Sale" ? 'red' : 'black'}}>{category.text}</Link>
                            </li>
                        )
                    })
                )
            }
        </ul>
      </div>
    </header>
  );
}

export default Header;