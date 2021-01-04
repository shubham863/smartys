import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
 //   const [total, setTotal]=useState(0)


    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            addToCart(cart)
           
        }
    }

    if(cart.length === 0) 
    return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 


    return (
    <div>
        {
            cart.map(product =>(
                <div className="detail cart">
                <img src={product.images.url} alt="" className="img_container" />
                <div className="box-detail">
                        <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.content}</p>

                   

                            <div className="delete"  onClick={() => removeProduct(product._id)}>
                                X
                            </div>

<div className="cart_div">
                    <Link  className="cart_view"  to={`/detail/${product._id}`}>
                        VIEW
                    </Link>     
                    </div>
               </div>
            </div>
            ))
        }
        
    </div>
            
    
    )
}

export default Cart
