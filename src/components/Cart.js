// import React,{useState} from 'react';
// import { useCandyContext } from './CandyContext';

// function Cart() {
//   const { cart,setCart } = useCandyContext();
//   const [showModal, setShowModal] = useState(false);
//   const handleModalShow = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };
//   const increaseItem = (ind) => {
//     setCart((prevItem) =>
//       prevItem.map((item, index) =>
//         index === ind ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };


//   const reduceItem = (ind) => {
//     setCart((prevItem) =>
//       prevItem.map((item, index) =>
//         index === ind ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
//       )
//     );
//   };


//   // Calculate total quantity
//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

//   return (
//     <div>
     
//       <button onClick={handleModalShow}>Cart</button>
//       <span> {totalQuantity}</span>
//       <div>
//         {
           
//             cart.map((item, index) => (
//             <div  key={index}>
//               <div>
//                 <img src={item.imageUrl} alt={item.title} />
//                 <p>Item: {item.title}</p>
//               </div>
//               <p>Price: {item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>{totalQuantity}</p>
//               <div >
//                 <button onClick={() => increaseItem(index)} >+</button>
//                 <button onClick={() => reduceItem(index)} >-</button>
//               </div>
//             </div>
//           ))}
//         <h3>Total: $ {totalPrice.toFixed(2)}</h3>
        
       
//           <button  onClick={handleModalClose}>
//             Close
//           </button>
      
        
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React, { useState } from 'react';
import { useCandyContext } from './CandyContext';

function Cart() {
  const { cart } = useCandyContext();
  const [displayedCart, setDisplayedCart] = useState([...cart]); // State for the cart displayed in UI
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const increaseItem = (ind) => {
    const updatedCart = [...displayedCart];
    updatedCart[ind].quantity += 1;
    setDisplayedCart(updatedCart);
  };

  const reduceItem = (ind) => {
    const updatedCart = [...displayedCart];
    updatedCart[ind].quantity = Math.max(0, updatedCart[ind].quantity - 1);
    setDisplayedCart(updatedCart);
  };

  // Calculate total quantity and price based on displayedCart
  const totalQuantity = displayedCart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = displayedCart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <button onClick={handleModalShow}>Cart</button>
      <span>{totalQuantity}</span>
      <div>
        {displayedCart.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.imageUrl} alt={item.title} />
              <p>Item: {item.title}</p>
            </div>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div>
              <button onClick={() => increaseItem(index)}>+</button>
              <button onClick={() => reduceItem(index)}>-</button>
            </div>
          </div>
        ))}
        <h3>Total: $ {totalPrice.toFixed(2)}</h3>
        <button onClick={handleModalClose}>Close</button>
      </div>
    </div>
  );
}

export default Cart;