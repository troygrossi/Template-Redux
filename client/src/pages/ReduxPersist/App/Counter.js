import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store'

const Counter = () => {

    const counter = useSelector((state)=> state.counter)
    const title = useSelector((state)=> state.title)
 

    const dispatch = useDispatch();
    const increment = () => {
      dispatch(actions.increment())
    };
    const decrement = () => {
      dispatch(actions.decrement());
      
    };
  
    return (
      <div className="App">
        <h1>{title}</h1>
        <h2>{counter}</h2>
        <button onClick={increment}> Incremnet</button>
        <button onClick={decrement}> Decrement</button>
  
      </div>
    );

  }





export {Counter};