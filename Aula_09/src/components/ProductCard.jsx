import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <h2>{props.nome}</h2>
      <p>R$ {props.preco.toFixed(2)}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard; //