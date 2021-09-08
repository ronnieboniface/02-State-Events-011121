# State & Events

## **Events**
  * React has its own event system that ensures events are handled consistently across browsers.
  * The event listener is attached to the element itself in JSX.
  There are the SAME events we worked with in vanilla JavaScript, they're just being implemented differently.

&nbsp;

![Button with alert](https://media.giphy.com/media/PUF3tVhNdTfDrIGGwa/giphy.gif)

&nbsp;

**with vanilla JavaScript:**

```html 
  <!-- In index.html -->
<button id="alert-tbn">Click Me!</button>
```

```js
  // In index.js
const alertButton = document.getElementById('alert-btn');

const buttonAlert = () => {
  alert('The button has been clicked!')
};

alertButton.addEventListener('click', buttonAlert);
```

**with React:**
```js
const handleClick = () => {
  alert('The button has been clicked!')
};

return <button onClick={handleClick}>Click Me!</button>;
```

&nbsp;


## **State**

  * State is data that is controlled by a component.
  * State is always stored as an object.
  * State allows us to keep track of data within a component rather than relying on data sent down as props from a parent component.
  * State allows us to have a more dynamic application.
  * Whenever our state is changed, the component re-renders.

&nbsp;

### **Setting Initial State**

* With a constructor (outdated):
  ```js
  class MyComponent extends Component {
    // constuctor runs before the render() method.
    constructor(){
      super();
      this.state = {
        count: 0
      };
    };

    render() {
      return <h1>{this.state.count}</h1>;
    };
  };
  ```

  &nbsp;

* Without a constructor:
  ```js
  class MyComponent extends Component {

    state = {
      count: 0
    };

    render() {
      return (
        <h1>{this.state.count}</h1>
      );
    };
  };
  ```

&nbsp;

### **setState**
* We cannot assign a new value to state because that will prevent the component from re-rendering.

  ```js
  // This is BAD.
  class MyComponent extends Component {

    state = {
      count: 0
    };

    handleClick = () => {
      state = {
        count: this.state.count + 1
      };
    };

    render() {

      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handeClick}>Increment Counter</button>
        </div>
      );
    };
  };
  ```

* We use a special method called `setState` to make changes to our state.
  ```js
  class MyComponent extends Component {

    state = {
      count: 0
    };

    handleClick = () => {
      this.setState(prevState => {
        return count: prevState.count + 1;
      });
    };

    render() {

      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handeClick}>Increment Counter</button>
        </div>
      );
    };
  };
  ```
  &nbsp;

* `setState` is inherited from `Component`.
* `setState` can take in either an object or a function, but it’s generally better to use a function.
  * There are cases where we will use an object.
* `setState` merges our new state with our current state, which means that we can update a single key-value pair without overriding other key-value pairs in our state.
* `setState` triggers a re-render so we can see our changes reflected in the browser.
* `setState` is asynchronous, which saves us from unnecessary re-renders.
  * We should not call on `this.state` when updating our state in case that version of state has not been updated yet.

  &nbsp;

  ```js
  // This is BAD practice.
  handeClick = () => {
    this.setState({
      count: this.state.count + 1;
    })
  };
  ```

&nbsp;

### **Parents & Children**
* We can only pass information from a parent component to a child component.
* If we want to send information from a child to a parent, we can pass the child a callback function as a prop.
* When that function is invoked in the child component, the parent component will be updated.

### **Props & State**
* What they have in common:
  * Props & state are both objects.
  * Changes to state & props will both trigger a re-render.
* Use state when a component needs to be able to change stored data.
* Use props when a component does not need to make changes to the data it’s rendering.
* When to use a callback prop instead of setting local state?
  * If a parent component needs access to the data inside of a component, the state should be stored with the parent.


## **Resources**
* [React Events](https://reactjs.org/docs/events.html)
* [React State](https://reactjs.org/docs/state-and-lifecycle.html)
* [Props vs. State](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)