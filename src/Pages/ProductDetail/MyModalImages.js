import React from 'react';
import './MyModalImages.css';

class MyModalImages extends React.Component {
constructor () {
    super();

    this.state = {
        detailData: {}
    }

    componentDidMount() {
        fetch("http://localhost:3000/data/detailData2.json")
          .then((res) => res.json())
          .then((res) => this.setState({ detailData: res.detailData }));
      }
    
}

    render () {
        return (
            <div className="MyModalImages">
                 {this.state.detailData.productImages && this.state.detailData.productImages.map(imgObject  => {
             return (<img alt ="product-img-in-full-size" className="product-img-in-full" src={imgObject.img} />)
           })}
           <button></button>
            </div>)
        
    }


}

export default MyModalImages


