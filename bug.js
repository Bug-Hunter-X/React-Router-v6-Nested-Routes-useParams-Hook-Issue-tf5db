In React Router Dom v6, when using nested routes with `useParams` hook, an error may occur if a parent route's parameter is also used in a child route. This leads to unexpected behavior or an infinite render loop.  For example, consider the following routes:

```javascript
<Route path="/:parentParam/childRoute/:childParam" element={<ChildRoute />}/>
```

If `parentParam` is also used within `ChildRoute`, it might cause issues because the `useParams` hook in the `ChildRoute` component receives an updated `parentParam` when it's not supposed to.  If the `parentParam` changes, it will cause a rerender. This can trigger the child route's `useParams` hook again leading to a loop.