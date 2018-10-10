import LazyImage from './LazyImage';
import withIntersectionObserver from '../../Hocs/withIntersectionObserver';

export default withIntersectionObserver(0.99)(LazyImage);