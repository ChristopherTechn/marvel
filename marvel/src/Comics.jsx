
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spider from './images/red spider.webp'
import black from './images/black.webp'
import group from './images/group.jpg'
import captain from './images/captain.jpg'



export default function Comics() {
  return (
    <div>
      <ProductList />
    </div>
  );
}



 function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const[searchResults, setSearchResults] =useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://gateway.marvel.com:443/v1/public/characters?limit=80&offset=0&apikey=b520fed71b07aefb45e672ddf17becf2") 
     
      setProducts(response.data.data.results);
   
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm, products]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
        <div className='container'>
            <div className='top'>
                <a href='signin' >SIGN IN</a>\<button name='button' id='join'>JOIN</button>
                <h1 id='marvel'>MARVEL HUB</h1>
                {/* <a href=''>MARVEL UNLIMITED <br>SUBSCRIBE</br></a> */}
                <img src='' alt=''></img>
                <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
            </div>
            <div className='middle'>
                <ul>
                    
                    <li><a href='comics'>COMICS</a></li>
                    <li><a href='characters'>CHARACTERS</a></li>
                    <li><a href='tvshows'>TV SHOWS</a></li>
                    <li><a href='series'>SERIES</a></li>
                    <li><a href='videos'>VIDEOS</a></li>
              
                    </ul>
            </div>
          
            <div className='img'>
              <ul>
              <li ><img src={spider} alt=''></img></li>
              <li id='disp'>  <img src={captain} alt=''></img></li>
              <li id='disp'> <img src={black} alt=''></img></li> 
           
              <li id='disp'><img src={group} alt=''></img></li>
              
              
              </ul> 
            </div>
            <div className='bottom'>
                
                <ul>
                    
                    <li><a href='how.jsx'>DEVELOPER HOW-TOs</a></li>
                    <li><a href='documentation.jsx'>INTERACTIVE DOCUMENTATION</a></li>
                    <li><a href='key.jsx'>Get a key</a></li>
                    <li><a href='help.jsx'>HELP</a></li>
                    <li><a href='updates.jsx'>NEWS AND UPDATES</a></li>
               
                    </ul>

            </div>
            </div>
           
<div className='products'>
    {products && products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} onClick={() => openProductDetails(product)}>
        
          <ul>
        <li>  <img src={`${product.thumbnail.path}.${product.thumbnail.extension}`} alt="" /></li>
          </ul>
          <h3>{product.name}</h3>
          <p id='des'>Description: {product.description}</p>
  
        </div>
      ))
      ):(
        <p>loading products...</p>

          )}
          </div>
          {selectedProduct && (
            <div className="modal-overlay">
            <div className="modal">
            <div className="modal-content">
              <h3>{selectedProduct.name}</h3>
              <button onClick={closeProductDetails}>Close</button>
              <img src={`${selectedProduct.thumbnail.path}.${selectedProduct.thumbnail.extension}`} alt="" />
              <p>Description: {selectedProduct.description}</p>
 
            </div>
          </div>
          </div>
          
      )}
      <div className='modal-over'>
  {searchTerm !== '' && searchResults.length > 0 ? (
    <div className='modal2'>
      <div className='content'>
        {searchResults.map((product) => (
          <div key={product.id}>
             <button onClick={closeProductDetails}>Close</button>
            <h3>{product.name}</h3>
            <img
              src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
              alt=''
            />
            <p>Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null}
</div>   
    </div>
      

  
);
}
