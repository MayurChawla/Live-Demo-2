import React from 'react';
import { db } from './fbconfig';

function Cart () {
    const [Data, setData] = React.useState(null);
    const [cartData, setCartData] = React.useState(null);

    function getCartData() {
        db.collection("cart").onSnapshot(function (querySnapShot){
        setCartData(
            querySnapShot.docs.map((doc)=>({
              id: doc.data().id,
              createdAt : doc.data().createdAt
            }))
        );
        });
      }

    const getData = async () => {
        await fetch("Data.json")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
        });
    };

    React.useEffect(() => {
        getData();
        getCartData();
      }, []);
    return(
        <div className="product-container">
            <h1>Cart</h1>
        </div>
    )
}

export default Cart;