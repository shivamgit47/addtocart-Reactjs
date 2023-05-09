import React, { useContext } from 'react'
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';

const ContextCart = () => {
const {item,clearCart,totalItem,totalAmount} = useContext(CartContext);
if(item.length===0)
    {
        return (
            <>
            <header>

<div className='continue-shopping'>
    <img src="./images/arrow.png" alt="" className='arrow-icon' />
    <h3>continue shopping</h3>
</div>

<div className='cart-icon'>
    <img src="./images/cart.png" alt="" />
    <p>{totalItem}</p>
</div>

</header>

<section className="main-cart-section">

<h1>Shopping Cart</h1>
<p>you have <span className='total-items-count'>{totalItem}</span>items in your Cart</p>

<div className="cart-items">

    <div className="cart-items-container">

        <Scrollbars>
            {
                item.map((curItem)=>{

                        return <Items key={curItem.id} {...curItem}/> ;
                })
            }
              
        </Scrollbars>
    </div>
</div>
<div className='card-total'>
    <h3>Card Total : <span>{totalAmount}Rs</span></h3>
    <button>CheckOut</button>
    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
</div>
</section> 
            </>
        )
    }
    
  return (
    <>
     <header>

<div className='continue-shopping'>
    <img src="./images/arrow.png" alt="" className='arrow-icon' />
    <h3>continue shopping</h3>
</div>

<div className='cart-icon'>
    <img src="./images/cart.png" alt="" />
    <p>{totalItem}</p>
</div>

</header>

<section className="main-cart-section">

<h1>Shopping Cart</h1>
<p>you have <span className='total-items-count'>{totalItem}</span>items in your Cart</p>

<div className="cart-items">

    <div className="cart-items-container">

        <Scrollbars>
            {
                item.map((curItem)=>{

                        return <Items key={curItem.id} {...curItem}/> ;
                })
            }
              
        </Scrollbars>
    </div>
</div>
<div className='card-total'>
    <h3>Card Total : <span>{totalAmount}Rs</span></h3>
    <button>CheckOut</button>
    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
</div>
</section> 
    </>
  )
}

export default ContextCart
