import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import Title from '../title/Title'
import { useParams } from 'react-router-dom'

const films = [
  { id:1, price:100, image:"https://picsum.photos/200/300", category:'films', Title:"Paisaje1"},
  { id:2, price:200, image:"https://picsum.photos/200/300", category:'films', Title:"Paisaje2"},
  { id:3, price:300, image:"https://picsum.photos/200/300", category:'films',Title:"Paisaje3"},
  { id:4, price:200, image:"https://picsum.photos/200/300", category:'series',Title:"Paisaje4"},
  { id:5, price:100, image:"https://picsum.photos/200/300", category:'series',Title:"Paisaje5"},
];


const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films)
      }, 2000);
    });
    if(categoriaId) {
      getData.then(res => setData(res.filter(film=> film.category === categoriaId)))
    } else {
      getData.then(res => setData(res))
    }


  }, [categoriaId])

  

  return (
    <>
        <Title greeting='Pablo'/>
        <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer