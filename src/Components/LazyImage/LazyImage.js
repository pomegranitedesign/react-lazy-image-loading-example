import React, { Component } from 'react';

class LazyImage extends Component {
  render() {
    const { imageSource, className, style, isVisible } = this.props;

    return (
      <img 
        src={imageSource}
        alt="Lazy Image"
        className={isVisible ? className : className + ' Placeholder'}
        style={{ ...style, transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)" }}
      />
    );
  }
}

export default LazyImage;