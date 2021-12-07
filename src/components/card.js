import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CardProduct = ({img,title,price}) => {
  return (
    <div className="card col-3">
      <div className="d-flex justify-content-between p-2">
        <p className="p-2 rounded" style={{backgroundColor:"#d3d3f3"}}>New</p>
        <p className="d-flex justify-content-between" style={{width:50}}>
          <i class="bi bi-list-ul"></i>
          <i className="bi bi-heart"></i>
        </p>
      </div>
      <img className="card-img" src={img} alt="Vans"/>
      <div className="card-img-overlay d-flex justify-content-end">
        <a href="#" className="card-link text-danger like">
          <i className="fas fa-heart"></i>
        </a>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p>
          <i class="bi bi-star" style={{color:'#CCCC00'}}></i>
          <i class="bi bi-star" style={{color:'#CCCC00'}}></i>
          <i class="bi bi-star" style={{color:'#CCCC00'}}></i>
          <i class="bi bi-star" style={{color:'#CCCC00'}}></i>
          <i class="bi bi-star" style={{color:''}}></i>
        </p>
        <div className="buy d-flex justify-content-between align-items-center">
          <div className="price text-success"><h5 className="mt-4">{price}</h5></div>
           <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
