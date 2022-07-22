import React from "react";

class CartItem extends React.Component {
    render ()
    {
        return (
            <div style={{ display : "inline-flex"}}>
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                   <div style ={ { fontSize : 25}}> Phone</div>
                   <div style = { { color : '#777'}}> Rs 999</div>
                   <div style ={ { color : '#778'}}> Qty : 1</div>
                   <div className="cart-item-action">
                    {/* Buttons */}
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