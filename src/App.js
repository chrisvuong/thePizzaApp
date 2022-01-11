import React from "react";
import PizzaMenuItems from "./components/pizzaitems";
// import FullOrder from "./components/fullmenu";
import react from "react";
// import { Offcanvas } from "bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import FullOrder from "./components/fullmenu";
class App extends React.Component {
  state = {items: [
    { id: 1, total: 4, name: "Hawaiian Pizza", price: 5},
    { id: 2, total: 4, name: "Meat Lovers Pizza",price: 6},
    { id: 3, total: 4, name: "Vegetarian Pizza",price: 4},
    { id: 4, total: 4, name: "Garlic Bread",price: 3},
    ],
  };
  handleIncrement = (itemObj)=>{
    const newItems = [...this.state.items];
    const index = newItems.indexOf(itemObj);
    newItems[index] = {...itemObj};
    newItems[index].total++;
    this.setState({items:newItems});
  };
  handleDecrement= (itemObj)=>{
    if (itemObj.total === 0) return;
    const newItems=[...this.state.items];
    const index = newItems.indexOf(itemObj);
    newItems[index] = {...itemObj};
    newItems[index].total--;
    console.log(itemObj);
    console.log(newItems);
    this.setState({items: newItems});
  }

  handleReset= ()=>{
    const newItems = this.state.items.map((item) => {
      item.total = 0;
      return item;
    });
    console.log(newItems);
    this.setState({items:newItems});
  }

  // render(){
  //   return (
  //   <div>
  //     <PizzaMenuItems
  //       items={this.state.items}
  //       onReset = {this.handleReset}
  //       onIncrement = {this.handleIncrement}
  //       onDecrement = {this.handleDecrement}

  //     />
  //   </div>
  //   );
  // };
    render(){
      return (
        <react.Fragment>
          <div className="container">
            <header className="clearfix">
              <span className="fs-4">My Pizza Shop</span>
              <button 
              className="btn btn-primary float-right"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#fullorder"
              >View Full Menu</button>
            </header>
          </div>

          <main className="container">
            <div className="offcanvas offcanvas-start" id = "fullorder">
              <div className="offcanvas-header">
                <h1 className="offcanvas-title">FullOrder</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss = "offcanvas"
                >x</button>
                <FullOrder
                items = {this.state.items}
                />
              </div>
              </div>
            <div className="container-fluid mt-3">
              <h3>Full Menu</h3>
              <PizzaMenuItems
                items={this.state.items}
                onReset = {this.handleReset}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
              />
            </div>
          </main>
        </react.Fragment>
      );
    }

    
}

export default App;
