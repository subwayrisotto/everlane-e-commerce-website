import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsCategories } from '../../data/productsCategories';
import styles from './SearchPage.module.scss';

function SearchPage() {
  const navigate = useNavigate();
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    setPopularCategories(productsCategories.filter(category => category.popular))
  }, [productsCategories]);

  console.log(popularCategories)

  return (
    <div className={styles.searchCtn}>
      <div className={styles.searchBarCtn}>
        <input type={'text'} className={styles.inputSearch} placeholder="Search"/>
        <button type={'button'} className={styles.searchButton} onClick={() => navigate(-1)}>Cancel</button>
      </div>

      <div className={styles.popularCategoryCtn}>
        <p className={styles.header}>Popular Categories</p>
        <ul className={styles.popularCategoryList}>
          {
            popularCategories.length > 0 ? (
              popularCategories.map((category, index) => {
                return(
                  <li className={styles.popularCategoryListItem} key={index}>
                    <img src={`/popularCategoriesCovers/${category.link}.png`} />
                    <p className={styles.text}>{category.text}</p>
                  </li>
                )
              })
            ) : (
              <p>Loading...</p>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default SearchPage;