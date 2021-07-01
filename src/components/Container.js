import React from 'react';
import firebase from 'firebase';
import { db } from './fbconfig';

const ContainerList = () => {

  const [Data, setData] = React.useState(null);
  const [cartData, setCartData] = React.useState(null);
  var cartList = [];

  const getData = async () => {
    await fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
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

  function addToCartFunction (id) {
    console.log("Added to cart with id = " + id);
    db.collection("cart").add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      id: id
    })
  };

  React.useEffect(() => {
    getData();
    getCartData();
  }, []);

    return (
    <div className="product-container">
      
    {
      Data?.map((item) => (
      <div className="product" key={item.id}>
        <img src={item.img} alt = "imageloading"/>
        <div className="product-info">
          <h3>{item.brand}</h3>
          <span>{item.rating}</span>
        </div>
        <div className="product-overview">
          <h2>{item.description}</h2>
          <p>Price : {item.price}</p>
          <p>Sizes :{item.sizes}</p>
          <p>For : {item.ideal}</p>
          <button onClick={()=>addToCartFunction(item.id)}>Add to Cart</button>
        </div>
      </div>
      ))
    }
    </div>
    );
        
}

export default ContainerList;
