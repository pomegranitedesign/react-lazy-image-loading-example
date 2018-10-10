import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export default threshold => BaseComponent => {
  return class WithIntersectionObserver extends Component {
    state = {
      isIntersecting: false
    }

    handleChange = ({ isIntersecting, intersectionRatio  }) => {
      setTimeout(
        _ => this.setState(_ => ({ isIntersecting: isIntersecting && intersectionRatio >= threshold })),
        500
      );
    }
    
    render() {
      return (
        <Observer onChange={this.handleChange} threshold={threshold}>
          <BaseComponent {...this.props} isVisible={this.state.isIntersecting} />
        </Observer>
      );
    }
  }
}
