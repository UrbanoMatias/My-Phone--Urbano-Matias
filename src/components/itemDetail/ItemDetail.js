import React, { useContext, useState } from 'react'
import { Container,  Row } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export const ItemDetail = ({id, category, name, desc1, desc2, desc3, desc4, desc5, price, stock, img1, img2, img3}) => {
   
    const {addCart, isInCart} = useContext(CartContext)

    const [add, setAdd] = useState(0)
    
    const addItem = () => {
        if (add > 0) {
            addCart({
                id,
                name,
                img1,
                price,
                add
            })
        }
        
    }

    return (
        <Container className="">
            <Row className="">
                <div className="col-6 ">
                <div id="carouselExampleControls" className="carousel slide carousel-dark d-flex justify-content-center" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt={name}/>
                        </div>
                        <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt={name}/>
                        </div>
                        <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt={name}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    
                </div>
                
                <div className="col-6 d-flex justify-content-center ">
                    <Row>
                        <div >
                            <h5>{category}</h5>
                            <h2 className="fs-2 text-secondary fw-bolder border-bottom">{name}</h2>
                        </div>
                        <div className="">
                            <h2 className="fs-5">Caracteristicas</h2>
                            <ul>
                                <li>{desc1}</li>
                                <li>{desc2}</li>
                                <li>{desc3}</li>
                                <li>{desc4}</li>
                                <li>{desc5}</li>
                            </ul>
                            <p>Stock: {stock}</p>
                        </div>
                        <div className="text-warning"><spam className="fs-1 fw-bolder m-5">${price}</spam></div>
                        <div className="d-flex align-items-center justify-content-around">
                        {
                            !isInCart(id)
                            ? <ItemCount 
                                    max={stock}
                                    add={add} 
                                    setAdd={setAdd}
                                    addItem={addItem}
                                />
                            : <Link to="/carrito/cartview"><button className="btn btn-success text-center">Terminar mi compra</button></Link>
                        }
                        </div>
                    </Row>
                    
                    
                </div>
                
            </Row>
        </Container>
    )
}
