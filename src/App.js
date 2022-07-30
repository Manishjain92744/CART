import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super ();
    this.state ={
       products :[
        {
            price : 99,
            title :" watch",
            qty : 1,
            img : ' https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80',
            id : 1
        },
        {
            price : 999,
            title :" Mobile phone",
            qty : 1,
            img : ' https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            id : 2
        },
        {
            price : 9999,
            title :" laptop",
            qty : 1,
            img : 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80',
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
handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty == 0)
       return ;
       else
       products[index].qty -=1;

       this.setState ({
        products : products
       })
   }
   handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products : items
    })
   }
   getCartCount  = () =>{
    const {products}=this.state;
    let count=0;

    products.forEach((product) => {
      count+=product.qty;
      
    });
    return count;

   }
   TotalCartPrice = () => {
    const {products} =  this.state;
      let cartTotal=0;
         
      products.map((product) => {
               cartTotal = cartTotal + product.qty*product.price;
    
      });
      return cartTotal; 

   }
  render () {
    const {products } = this.state;
  return (
    <div className="App">
           <Navbar count={this.getCartCount()} />
          <Cart
          products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = { this.handleDecreaseQuantity}
            onDeleteProduct =    {this.handleDeleteProduct} 
            />
            <div  style = {{padding :15 ,fontSize : 20}}> Total : { this.TotalCartPrice()}</div>
    </div>
  );
  }
}


export default App;
