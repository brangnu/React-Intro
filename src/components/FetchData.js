import React, { Component } from 'react';
import '../styles/FetchData.css';

class FetchData extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgUrls: [],
      hei: '1'
    }
  }


  componentDidMount(){
    var that = this
    fetch(this.props.url).then(
      function(response){
        response.json().then(function(data){
          that.setState({
            imgUrls: that.state.imgUrls.concat(data.slice(0,8))
          })
          console.log(that.state.imgUrls)
        })
      }
    )
  }


  render(){
    return(
      <div className="FetchData">
        {this.state.imgUrls.map((imgObj) => {
          return <img src={imgObj.url} key={imgObj.id} />
        })}
      </div>
    )
  }
}

export default FetchData;
