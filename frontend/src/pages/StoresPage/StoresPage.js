import React, { useEffect, useState } from 'react'
import { getStores } from '../../services/api';
import styles from './StoresPage.module.scss';

function StoresPage() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        async function fetchStores() {
          const data = await getStores(); 
          setStores(data);
        }
    
        fetchStores();
    }, []);

    console.log(stores)

  return (
    <div className={styles.storesContainer}>
        <ul className={styles.storesList}>
            {
                stores.length > 0 ? (
                    stores.map((store, index) => {
                        return(
                            <li className={styles.storesListItem} key={index}>
                                <img src={`/stores/${store.image}`} alt={store.name} />
                                <p className={styles.city}>{store.city}</p>
                                <p className={styles.storeName}>{store.name}</p>
                            </li>
                        )
                    })
                ) : (
                    <p>Loading...</p>
                )
            }
        </ul>
    </div>
  )
}

export default StoresPage
