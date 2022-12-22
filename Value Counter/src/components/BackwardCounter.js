import useCounter from '../Hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  var counter=useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
