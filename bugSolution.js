The solution is to avoid accessing the parent route's parameter directly within the child route's `useParams` hook.  Instead, pass the parent parameter as a prop from the parent route component to the child route component.

```javascript
// bug.js
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  return (
    <Routes>
      <Route path="/:parentParam/childRoute/:childParam" element={<ChildRoute/>}/>
    </Routes>
  );
}

function ChildRoute() {
  const { parentParam, childParam } = useParams();
  //Problem: Accessing parentParam here will cause problems if parentParam is changed
  return (
    <div>
      <h1>Child Route</h1>
      <p>Parent Param: {parentParam}</p>
      <p>Child Param: {childParam}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ParentRoute />
    </BrowserRouter>
  );
}
export default App;

// bugSolution.js
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  return (
    <Routes>
      <Route path="/:parentParam/childRoute/:childParam" element={<ChildRoute/>}/>
    </Routes>
  );
}

function ChildRoute() {
  const { childParam } = useParams();
  return (
    <div>
      <h1>Child Route</h1>
      <p>Child Param: {childParam}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ParentRoute />
    </BrowserRouter>
  );
}
export default App;