import React from 'react';

const ContainerList = () => {

  const [Data, setData] = React.useState(null);

  const getData = async () => {
    await fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  function addToCartFunction (id) {
    console.log("Added to cart with id = ");
  };

  React.useEffect(() => {
    getData();
  }, []);

    return (
    <div className="product-container">
      <div >
        price :
        <button className="sort-by-price-button">asce</button>
        <button className="sort-by-price-button">desc</button>
      </div>
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
          <button onClick={addToCartFunction(item.id)}>Add to Cart</button>
        </div>
      </div>
      ))
    }
    </div>
    );
        
}

export default ContainerList;
