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
        <div className={styles.headerContent}>
            <p className={styles.header}>Stores</p>
            <p className={styles.subHeader}>Find one of our {stores.length} stores nearest you.</p>
        </div>

        <ul className={styles.storesList}>
            {
                stores.length > 0 ? (
                    stores.map((store, index) => {
                        return(
                            <li className={styles.storesListItem} key={index}>
                                <img src={`/stores/${store.image}`} alt={store.name} />
                                <div className={styles.textCtn}>
                                    <p className={styles.city}>{store.city}</p>
                                    <p className={styles.storeName}>{store.name}</p>
                                </div>
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
