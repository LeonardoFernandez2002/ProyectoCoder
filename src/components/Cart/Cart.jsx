import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {
  const {cart, totalPrice} = useCartContext();


  const order = {
    buyer: {
      name:'Agustin Fernander',
      email:'agustinfernan27@gmail.com',
      phone:'3834061574',
      address:'assdd'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }


  const handleClick = async () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id));
  }

  if (cart.length === 0) {
    return (
      <>
      <p>No hay elementos en el Carrito</p>
      <Link to='/'>Hacer compras</Link>
      </>
    );
  }

  return (
    <>
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
          Total: {totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir Compra</button>
    </>
  )
}

export default Cart;