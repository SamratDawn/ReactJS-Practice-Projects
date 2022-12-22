import useCounter from '../Hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  var counter=useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
