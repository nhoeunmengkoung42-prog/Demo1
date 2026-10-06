

function Product({title , p , price , img , soldout}) {
  return (
    

       
        <div className="p1">
          
          <img
          classname={soldout ? "soldout" : ""}
          src={img}
          alt="Adobe After Effects" />

          <div>
            <h2>{title}</h2>
            <p>{p}</p>
            {/* <p className="">{price}</p> */}
            <span>{soldout ? "soldout" : `$ ${price}`}</span>
          </div>
        </div>


        
     
  )
}

export default Product
// props