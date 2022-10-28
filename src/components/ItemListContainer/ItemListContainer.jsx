import React, {useState, useEffect} from 'react'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import Title from '../title/Title'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'



const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos')
    if(categoriaId) {
    const queryFilter = query(queryCollection, where('category', '==', categoriaId ))
    getDocs(queryFilter)
      .then(res=> setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res=> setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }


  }, [categoriaId])

  

  return (
    <>
        <div className={styles.itemlist}>
          <Title greeting=''/>
          <ItemList data={data}/>
       </div>
    </>
  )
}

export default ItemListContainer