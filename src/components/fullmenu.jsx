// import { render } from "@testing-library/react";
import React from "react";

class FullOrder extends React.Component{
    totalCost = ()=>{
        let price = 0;
        this.props.items.map((item)=>{
            price += item.total*item.price;
            return'';
        });
        return price;
    };

    render(){
        return (
            <div>
                {this.props.items.map((item)=>{
                    return <p key={item.id}>{item.total} x {item.name}</p>;
                })}
                <p>Total Cost is: { this.totalCost()}$</p>
            </div>
        );
    }
}
export default FullOrder;