import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import car from '../../assets/ic_shipping.png';
import api from '../../services/api';
import './styles.css';

function Items() {
  const [product, setProduct] = useState([]);

  const search = new URLSearchParams(useLocation().search).get('search');

  useEffect(() => {
    async function searchProduct() {
      const res = await api.get(`/items?search=${search}`);
      const [...searchs] = res.data;

      setProduct(searchs);
    }
    searchProduct();
  }, [search]);

  function searchLoader(product) {
    return (
      <>
        <div className="containerList">
          <Link key={product.id} to={`/items/${product.id}`}>
            <div className="list">
              <img
                id="product_image"
                src={product.picture}
                alt={product.title}
              />
              <div className="products_items">
                <div className="price">
                  <p>$ {product?.price?.decimals}</p>
                  {product.free_shipping ? (
                    <img src={car} alt="frete gratis" />
                  ) : (
                    ''
                  )}
                </div>
                <p className="description">{product.title}</p>
              </div>
              <p className="city">{product.city}</p>
            </div>
          </Link>
          <hr />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        {product.map((product, index) => searchLoader(product, index))}
      </div>
    </>
  );
}

export default Items;
