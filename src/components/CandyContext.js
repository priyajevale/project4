


// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const CandyContext = createContext();

//  export const useCandyContext = () => React.useContext(CandyContext);




// export function CandyProvider({ children }) {
//     const [candies, setCandies] = useState([]);
//     const [cart, setCart] = useState([]);
  
//     useEffect(() => {
//       const storedCandies = JSON.parse(localStorage.getItem('candies')) || [];
//       const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      
//       // Fetch data from API only if local storage is empty
//       if (storedCandies.length === 0) {
//         fetchCandies();
//       } else {
//         setCandies(storedCandies);
//       }
      
//       if (storedCart.length === 0) {
//         fetchCart();
//       } else {
//         setCart(storedCart);
//       }
//     }, []);
  
//     useEffect(() => {
//       localStorage.setItem('candies', JSON.stringify(candies));
//     }, [candies]);
  
//     useEffect(() => {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);
  
//     const fetchCandies = () => {
//       axios.get('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/candies')
//         .then(response => {
//           setCandies(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching candies:', error);
//         });
//     };
  
//     const fetchCart = () => {
//       axios.get('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/cart1')
//         .then(response => {
//           setCart(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching cart:', error);
//         });
//     };

//   const addCandy = (newCandy) => {
//          setCandies([...candies, newCandy]);
       
//     // Send a POST request to add a new candy
//     axios.post('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/candies', newCandy)
//       .then(response => {
//         setCandies([...candies, response.data]);
//       })
//       .catch(error => {
//         console.error('Error adding candy:', error);
//       });
//   };



// const buyCandy = (candy, quantity) => {
//     // Check if the candy already exists in the cart
//     const existingItemIndex = cart.findIndex(item => item.candyName === candy.candyName);
    
//     if (existingItemIndex !== -1) {
//       // If the candy already exists, update its quantity
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCart(updatedCart);
//     } else {
//       // If the candy does not exist, add it to the cart
//       setCart([...cart, { ...candy, quantity }]);
//     }
  
//             // Send a POST request to update the cart
//     axios.post('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/cart1', { candy, quantity })
//     .then(response => {
//       setCart(response.data);
//     })
//     .catch(error => {
//       console.error('Error updating cart:', error);
//     });
// };
         
       
    
  
   
//   return (
//     <CandyContext.Provider value={{ candies, cart, addCandy, buyCandy,setCart }}>
//       {children}
//     </CandyContext.Provider>
//   );
// }

//  export function CandyForm() {
//   const { addCandy } = useCandyContext();
//   const [candyName, setCandyName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleAddCandy = () => {
//     addCandy({ candyName, description, price });
//     setCandyName('');
//     setDescription('');
//     setPrice('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Candy Name"
//         value={candyName}
//         onChange={(e) => setCandyName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <button onClick={handleAddCandy}>Add Candy</button>
//     </div>
//   );
// }
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandyContext = createContext();

export const useCandyContext = () => React.useContext(CandyContext);

export function CandyProvider({ children }) {
    const [candies, setCandies] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchCandies();
        fetchCart();
    }, []);

    const fetchCandies = () => {
        axios.get('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/candies')
            .then(response => {
                setCandies(response.data);
            })
            .catch(error => {
                console.error('Error fetching candies:', error);
            });
    };

    const fetchCart = () => {
        axios.get('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/cart1')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart:', error);
            });
    };

    const addCandy = (newCandy) => {
             setCandies([...candies, newCandy]);
               
        axios.post('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/candies', newCandy)
            .then(response => {
                setCandies([...candies, response.data]);
            })
            .catch(error => {
                console.error('Error adding candy:', error);
            });
    };

    const buyCandy = (candy, quantity) => {
        //     // Check if the candy already exists in the cart
            const existingItemIndex = cart.findIndex(item => item.candyName === candy.candyName);
            
            if (existingItemIndex !== -1) {
              // If the candy already exists, update its quantity
               const updatedCart = [...cart];
               updatedCart[existingItemIndex].quantity += quantity;
               setCart(updatedCart);
             } else {
               // If the candy does not exist, add it to the cart
               setCart([...cart, { ...candy, quantity }]);
        }
          
                     // Send a POST request to update the cart
     axios.post('https://crudcrud.com/api/3639ff6fcff74d09ac25679aa15c1f88/cart1', { candy, quantity })
            .then(response => {
               setCart(response.data);
             })
             .catch(error => {
              console.error('Error updating cart:', error);
            });
        };

    return (
        <CandyContext.Provider value={{ candies, cart, addCandy, buyCandy }}>
            {children}
        </CandyContext.Provider>
    );
}

export function CandyForm() {
    const { addCandy } = useCandyContext();
    const [candyName, setCandyName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddCandy = () => {
        addCandy({ candyName, description, price });
        setCandyName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Candy Name"
                value={candyName}
                onChange={(e) => setCandyName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAddCandy}>Add Candy</button>
        </div>
    );
}