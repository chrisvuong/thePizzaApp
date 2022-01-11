import React, {Component} from "react";

class PizzaMenuItem extends Component{
   
    render(){


        return(
            <div>
                
                  <span>{this.props.item.name}</span> 
                  <span className="m-2">{this.props.item.price}$</span>
                  <span className="badge m-2  badge-primary ">{this.props.item.total}</span>
                
                <button className="badge m-2  badge-primary" 
                onClick={
                    this.props.onIncrement
                }
                >+</button>
                <button  className="badge m-2  badge-primary"
                onClick={
                    this.props.onDecrement
                }
                >-</button>
            </div>
        );
        
    }
}
export default PizzaMenuItem;
