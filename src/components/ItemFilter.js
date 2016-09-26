import React, { Component } from 'react';
import '../styles/ItemFilterStyle.css';



class ItemFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchItem: ''
    }
  }

  handleChange(event){
    this.setState({
      searchItem: event.target.value
    })
  }

  render(){
    let filteredContact = this.props.items.filter(
      (item) => { return item.student.indexOf(this.state.searchItem) !== -1;}
    )
    return(
      <div>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          defaultValue={this.state.searchItem}
          />
        <div className="filteredContact">
          <ul className="ul">
            {filteredContact.map(
                (item) => { return <li key={item.id}> {item.student} </li>}
            )}
          </ul>
        </div>

      </div>
    )
  }

}

export default ItemFilter;
