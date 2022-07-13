import {Provider} from 'react-redux';
import {store} from '../store';
import {Counter} from './Counter';
const CounterAppToolKit = () => {

    return(
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )

  }





export {CounterAppToolKit};