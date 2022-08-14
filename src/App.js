import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import index from './index';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

class App extends React.Component {
  constructor () {
    super ();
    this.state ={
       products :[] ,
       loading : true
    } ;
    }
    // componentDidMount() {
    //   Firebase
    //     .firestore()
    //     .collection("products")
    //     .get()
    //     .then(snapshot => {
    //       const products = snapshot.docs.map(doc => {
    //         const data = doc.data();
    //         data["id"] = doc.id;
    //         return data;
    //       });
    //       this.setState({ products: products, loading: false });
    //     });
    // }
    
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
