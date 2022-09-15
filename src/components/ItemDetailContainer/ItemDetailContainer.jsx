import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const films = [
  { id:1, image:"https://picsum.photos/200/300", category:'films', Title:"Paisaje1"},
  { id:2, image:"https://picsum.photos/200/300", category:'films', Title:"Paisaje2"},
  { id:3, image:"https://picsum.photos/200/300", category:'films',Title:"Paisaje3"},
  { id:4, image:"https://picsum.photos/200/300", category:'series',Title:"Paisaje4"},
  { id:5, image:"https://picsum.photos/200/300", category:'series',Title:"Paisaje5"},
];


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });

        getData.then(res => setData(res.find(film=> film.id === parseInt(detalleId))));
    }, [])


  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;