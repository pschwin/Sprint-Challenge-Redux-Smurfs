1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, reduce, filter. Creating a new object: map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is an object that contains the state of the application. The original object is never changed (immutable)
Actions are like packets of info.. They have action types and the associated data.
Reducers spit out the updated version of state taking into consideration the current state and the given action. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global and component state is local. The store hold application state. The state of a component lives within that component only.  

1.  What is middleware?

Middleware intercepts every action before it goes to the reducer. Its functionaility includes: stopping actions, forwarding actions, dispatch another action, dispatch several actions. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a type of middleware. It intercepts the action creator and look at the return value. If the returned value is am action it will forward it to the reducer. If the returned value is a function, it will invoke it and pass in dipsatch as an argument.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()

//
