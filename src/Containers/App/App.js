import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

import SampleImage from '../../Assets/Images/sample_image.jpg';
import PostCard from '../../Components/PostCard/PostCard';
import LazyImage from '../../Components/LazyImage';
import './App.scss';
import withIntersectionObserver from '../../Hocs/withIntersectionObserver';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1 className="Title">Scroll Down</h1>
        </header>

        <div className="Container">
          <PostCard 
            title="Post Title"
            postImageSource={SampleImage}
            className='PostCardImage'
          />
          
          <PostCard 
            title="Post Title"
            postImageSource={SampleImage}
            className='PostCardImage'
          />
          
          <PostCard 
            title="Post Title"
            postImageSource={SampleImage}
            className='PostCardImage'
          />

          <PostCard 
            title="Post Title"
            postImageSource={SampleImage}
            className='PostCardImage'
          />
        </div>
      </div>
    );
  }
}

export default App;