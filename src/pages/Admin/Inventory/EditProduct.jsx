import React from 'react'
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  let { productId } = useParams();
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct