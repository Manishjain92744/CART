import React from "react";

const CartItem  = (props) =>
    {
        const {title ,price , qty}=props.product;
        const {product , onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return (
            <div className = "cart-item" >
                <div className="left-block">
                    <img style={styles.image} src = {product.img} />
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
                   onClick = {() =>onIncreaseQuantity(product)}
                     />
                    <img alt=" decrease" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1658915186~hmac=87882be24b46532f78a626fd6d590d65" 
                    onClick = {() =>onDecreaseQuantity(product)}
                    />
                    <img alt=" delete" 
                    className="action-icons"
                     src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                     onClick={() => onDeleteProduct(product.id)}
                     />
                   </div>
                </div>
            </div>
        );
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