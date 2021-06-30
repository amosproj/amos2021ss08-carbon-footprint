# How to state management with redux toolkit:

optional: install redux devtools browser extension (chrome) to check state in browser devtools

## To save data in state:
`store/index.js`:
```js
    export default configureStore({
        reducer: {
            products: productReducer,

            //ADD REDUCERS HERE
        },
    })
```
`store/slices/anythingSlice.js`
    Add Slice similar to productSlice.js

`store/actions/anythingAction.js`
    Add Action like productAction.js, replace function that gets the data

## To read data from state
```js 
    import { useDispatch, useSelector } from 'react-redux';
    const products = useSelector(state => state.products.data)
    const dispatch = useDispatch();
    dispatch(loadProjects()) //<-- call function that is defined in anythingAction.js
```
or if in component:
```js
    const products = useSelector(state => state.products.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProjects())
    }, []);
```