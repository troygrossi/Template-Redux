# React Redux



# Redux without toolkit


## Deploying the project

1. Create a new folder
2. Type: 'git init' to create a new local repo
3. Type: 'git remote add origin git@github.com:troygrossi/Redux-Template.git'
4. Type: 'git pull origin main' to pull the code from my remote repo
4. cd into the client folder
5. Type: 'npm install' to install the dependencies
6. Type: 'npm run start' to deploy the project locally

## Creating the project

1. npm create-react-app
2. npm i redux react-redux
3. create redux folder
    - folder: store
    - file: index.js
4. create app folder
    - folder: App
    - file: Counter.js
    - file: index.js (need parent component for provider)

 ### /src/VanillaRedux/store/index.js
```
import {createStore} from 'redux';

//Reducer
const reducerFn = (state={counter: 0, title: 'Vanilla Counter App'}, action) => {

    if(action.type === 'INC'){
        return({...state, counter: state.counter += 1})
    }
    if(action.type === 'DEC'){
        return({...state, counter: state.counter -= 1})
    }
    return state;
};
//Store
const store = createStore(reducerFn);

export {store};
```
- In this example the recucer is invoked upon store creation
    - The return value is the new state (implicit state = return)
- Reducer code must be synchronous

### /src/VanillaRedux/App.js
```
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {

    const counter = useSelector((state)=> state.counter)
    const title = useSelector((state)=> state.title)

    const dispatch = useDispatch();
    const increment = () => {
      dispatch({type: 'INC' });
    };
    const decrement = () => {
      dispatch({type: 'DEC' });
      
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

```

# Redux with toolkit

## Getting Started

1. npm create-react-app
2. npm i redux react-redux @reduxjs/toolkit
3. create redux folder
    - folder: store
    - file: index.js
4. create app folder
    - folder: App
    - file: Counter.js
    - file: index.js (need parent component for provider)

 ### /src/ToolKitRedux/store/index.js
```
import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, title: 'ToolKit Counter App'},
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            state.counter -= 1;
        },

    }

})

const store = configureStore({
    reducer: counterSlice.reducer
});

const actions = counterSlice.actions;
export {actions, store};
```
- In this example the state is initialized with an initial state
- State can be altered in the body of the reducer function without the need of a return statement

### /src/ToolKitRedux/App.js
```
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

```

### Must provide the store as context to the component
```
    return(
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )
```
