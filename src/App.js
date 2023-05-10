import logo from './logo.svg';
import './App.css';
import products from './data'
import React, {useState} from 'react';
import Display from './display';

function App() {

  const [data, setData] = useState(products)

  let productsJsx = data.map((product) => {
    return <Display product={product} key={product.name} data={data} changeState={setData}/>;
  })

  return (
    <div className="App">
      {productsJsx}
    </div>
  );
}

export default App;
