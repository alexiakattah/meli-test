import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import './styles.css';
function Product({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const { id } = match.params;

    async function loadProduct() {
      const res = await api.get(`/items/${id}`);

      const { items } = res.data;

      setProduct(items);
    }
    loadProduct();
  }, []);

  function productList(data) {
    return (
      <>
        {/* {console.log('data.price', data.price)} */}

        {/* {console.log('será?', JSON.parse(data.price).decimals)} */}
        <div className="container">
          <div className="container_img">
            <img id="img_description" src={data.picture} alt="" />
            <div className="details">
              <small>
                {data.condition} - {data.sold_quantity} vendidos
              </small>
              <p>{data.title}</p>
              <strong>$ {data?.price?.decimals}</strong>
              <div className="button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div className="description_product">
            <strong>Detalhes do Produto</strong>
            <p>{data.description}</p>
          </div>
        </div>
      </>
    );
  }
  return <>{productList(product)}</>;
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
export default Product;
