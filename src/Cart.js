import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
    constructor () {
        super ();
        this.state ={
           products :[
            {
                price : 99,
                title :" watch",
                qty : 1,
                img : ' ',
                id : 1
            },
            {
                price : 999,
                title :" Mobile phone",
                qty : 10,
                img : ' ',
                id : 2
            },
            {
                price : 9999,
                title :" laptop",
                qty : 1,
                img : ' ',
                id : 3
            }
           ]
        }
        }
      handleIncreaseQuantity = (product) => {
            const { products } = this.state;
            const index = products.indexOf(product);
            products[index].qty +=1;

            this.setState ({
                products : products
            })
    }
    handleDecreaseQuantity =(product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        const quantity = products[index].qty;
        if(quantity == 0)
           return ;
           else
           products[index].qty -=1;

           this.setState ({
            products : products
           })
    }
     render(){
        const { products } = this.state;
        return (
         <div className=" cart">    
            { products.map((product)=>{
                return ( 
                <CartItem 
                 product={product}  
                 key ={product.id} 
                 onIncreaseQuantity = {this.handleIncreaseQuantity}
                 onDecreaseQuantity = { this.handleDecreaseQuantity}
                 />)
             } )}
         </div>
        ); 
     }
}



export default Cart