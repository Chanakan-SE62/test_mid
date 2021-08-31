import React from 'react';

class Image extends React.Component {
  render () {
    return <img src={this.props.path} className='image'></img>;
  }
}

export default Image;