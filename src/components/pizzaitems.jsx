import React from "react";
import PizzaMenuItem from "./pizzaitem";

class PizzaMenuItems extends React.Component{
    // state = {
    //     items:[
    //         { id: 1, total: 4, name: "Hawaiian Pizza" },
    //         { id: 2, total: 4, name: "Meat Lovers Pizza" },
    //         { id: 3, total: 4, name: "Vegetarian Pizza" },
    //         { id: 4, total: 4, name: "Garlic Bread" },
    //     ],
    // };
    // onResetHandling = ()=>{
    //     const newItem = this.state.items.map((item)=>{
    //         item.total = 0;
    //         return item;
    //     })
    //     this.setState({items: newItem});
    // }
    // handleIncrement= (itemObj)=>{
    //     const newItems=[...this.state.items];
    //     const index = newItems.indexOf(itemObj);
    //     newItems[index] = {...itemObj};
    //     newItems[index].total++;
    //     console.log(itemObj);
    //     console.log(newItems);
    //     this.setState({items: newItems});
    // }
    // handleDecrement= (itemObj)=>{
    //     if (itemObj.total === 0) return;
    //     const newItems=[...this.state.items];
    //     const index = newItems.indexOf(itemObj);
    //     newItems[index] = {...itemObj};
    //     newItems[index].total--;
    //     console.log(itemObj);
    //     console.log(newItems);
    //     this.setState({items: newItems});
    // }
    render (){
      return (
          <div>
              <h2>Menu item</h2>
              {    
                  this.props.items.map(
                      (item) => (
                          <PizzaMenuItem
                            key = {item.id}
                            onIncrement = {()=> this.props.onIncrement(item)}
                            onDecrement ={()=> this.props.onDecrement(item)}
        
                            item = {item}
                          />
                      )
                  )
              }
              <button onClick={this.props.onReset}>Reset</button>
          </div>
          
      );  
    };
}
export default PizzaMenuItems;
