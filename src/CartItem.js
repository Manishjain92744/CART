import React from "react";

class CartItem extends React.Component {
    
      // 2nd way of doing   this.increaseQuantity = this.increaseQuantity.bind(this);
    increaseQuantity = () => {
        // console.log('test' ,this.state) ;
        // setState form 1 object form  asynchronus call 
        // this.setState({
            //     qty : this.state.qty+1
            // },() => {} ) call back to updating state 
            // setState form 2 - if previous state required use this 
            this.setState((prevState) => {
                return {
                    qty : prevState.qty +1 
                }
            } , () => { 
                // console.log('this.state',this.state);
            })
            // console.log (this.state);
        }
        decreaseQuantity = () => {
            const {qty }=this.state;
            if(qty===0)
                return ;
            else{
                this.setState((prevState) => {
                    return {
                        qty : prevState.qty - 1 
                    }
                })
            }        
        }
        render ()
    {
         console.log('this.props',this.props );
        const {title ,price , qty}=this.props.product;
        return (
            <div className = "cart-item" >
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                   <div style ={ { fontSize : 25}}> {title}</div>
                   <div style = { { color : '#777'}}>Rs : {price}</div>
                   <div style ={ { color : '#778'}}>Qty : {qty}</div>
                   <div className="cart-item-action">
                    {/* Buttons */}
                    <img alt="increase "
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                   // 1st way of doing onClick={this.increaseQuantity.bind(this)}
                   onClick = {this.increaseQuantity}
                     />
                    <img alt=" decrease" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1658915186~hmac=87882be24b46532f78a626fd6d590d65" 
                    onClick = {this.decreaseQuantity}
                    />
                    <img alt=" delete" 
                    className="action-icons"
                     src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                     />
                   </div>
                </div>
            </div>
        );
    }
}

const styles = {
  image : {
    height : 110,
    width : 110,
    borderRadius :4,
    background : '#777'
  }
}

export default CartItem;