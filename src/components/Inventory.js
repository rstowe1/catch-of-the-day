import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render(props) {
    return (
      <div className="inventory">
        <AddFishForm addFish={this.props.addFish}/>
      </div>
    )
  }
}

export default Inventory;
