import React,{useState} from 'react';
import "./App.css";

function Shopping(){
    const product=[
        { id: 1, name: "Laptop 💻", price: 1000 },
        { id: 2, name: "Headphones 🎧", price: 150 },
        { id: 3, name: "Smartphone 📱", price: 800 },
        { id: 4, name: "Keyboard ⌨️", price: 120 },      
    ];
    
    const [cart,setCart]=useState([]);

    //add product to the cart
    const addToCart=(product)=>{
        //check if the product already exists
        const existing=cart.find((item)=>item.id === product.id);
        if(existing){
            setCart(
                cart.map((item)=>
                item.id === product.id ? {...item,quantity:item.quantity+1} : item)
            );
        }else{
            setCart([...cart,{...product,quantity: 1}]);
        }
    };

    const decreasequantity=(productId)=>{
        setCart(
            cart.map((item)=>item.id === productId ? {...item,quantity:item.quantity-1}:item)
            .filter((item)=>item.quantity>0)
        );
    };

    //remove a product from cart
    const removeFromCart=(productId)=>{
        setCart(cart.filter((item)=>item.id !=productId))
    };
    //calculate total price
    const getPrice=()=>{
        return cart.reduce(
            (total,item)=>total+item.price*item.quantity,
            0
        );
    };
    return(
        <div className="container">
            <h1>Shopping Cart App</h1>
            {/* Product List */}
            <div className="products">
                <h2>Product</h2>
                {product.map((product)=>(
                    <div key={product.id} className="product">
                       <span>
                        {product.name}-${product.price}
                        </span> 
                        <button onClick={()=>addToCart(product)}>Add to Cart</button>

                    </div>    
                ))}
            </div>
             {/* Shopping Cart Section */}
            <div className='cart'>
                <h2>Your cart</h2>
                {cart.length === 0?(
                    <p>Your cart is empty.</p>
                ):(
                    cart.map((item)=>(
                        <div key={item.id} className="cart-item">
                            <span>
                                {item.name} (x{item.quantity} - ${item.price * item.quantity})
                            </span>
                            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                            <button onClick={()=>decreasequantity(item.id)}>-</button>
                        </div>    
                    ))
                )}
                <h3>Total:${getPrice}</h3>
            </div>
        </div>
    );
}
export default Shopping;