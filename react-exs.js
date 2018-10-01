// exercises tested using Babel under the hood,
// so this code below won't run stand alone.



// basic components

// stateless func components (0.14 on)
/*motivation: Stateless components (also known as presentational components)
should make up the bulk of your React applications. As a general
rule of thumb, the less stateful components your application has, the better.*/

const Username = function(props) {
  return <p>The logged in user is: {props.username}</p>;
};

// more concise:
const Username = ({ username }) => <p>The logged in user is: {username}</p>;


// change code below this line
class MyComponent extends React.Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
    

  }
}

ReactDOM.render(
  <MyComponent />, document.getElementById('challenge-node')
);



// simple example using PropTypes checking and defaults
const Camper = function (props) {

  return <div className="cbot"><p>{props.name}</p></div>;
}

Camper.defaultProps = { name: 'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired};

// NB propTypes are usually called with a static property in the Class:
static propTypes = {
	x:PropTypes.string.isRequired;
}
// Also, worth removing propTypes using a build module for prod. code.



// simple State component - extend React and put in the constructor
//If a component is stateful,
// it will always have access to the data in state in its render() method.
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name:'Luke'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};



/* Binding: this
define methods for your component class.

A class method typically needs to use the this keyword so it can
access properties on the class (such as state and props) inside
the scope of the method.
There are a few ways to allow your class methods to access this.
*/


// simple  click counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
  increment() {
    this.state.count += 1;
  }
  decrement() {
    this.state.count -= 1;
  }
  reset() {
    
    this.state.count = 0;
  }
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};







// valid solution
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    this.setState({input:event.target.value});
    
  }

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <input value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


/* passing state as props to child components

 A common pattern is to have a stateful component containing the state
 important to your app, that then renders child components.
 You want these components to have access to some pieces of
 that state, which are passed in as props.
 
 
  React: unidirectional data flow. State flows in one direction down tree
  of your application's components, from the stateful parent component
  to child components.
  
  The child components only receive the state data they need.
  
  The ethos is that the stateful component is limited as much as possible and
   rest of your components simply receive state from the parent as props.
   
   
   You can also pass handler functions
   or any method that's defined on a React component to a child component.
   
   
   lifecycle hooks, and allow you to catch components at certain points in time.
   This can be:
   before they are rendered, before they update,
   before they receive props, before they unmount, and so on.
   
   e.g. componentDidMount() // use when want to call server, API call etc
   
   // also...also the best place to attach
   any event listeners you need to add for specific functionality.
 */
 
 
 // rndering markup - being concise when using conditions
 e.g. use
 {condition && <p>markup</p>}
 
 // related ot this JSX doesnt compile the if-else directly ..
 // when an if/else statement was required,
 // it was always outside the return statement
 
 
 
 /*
 
 Using props to conditionally render code is very common
 with React developers — that is, they use the
 value of a given prop to automatically make decisions about what to render.
 */
 
 /*
 You can also render CSS conditionally based on the state of a React
 component. To do this, you check for a condition, and if that
 condition is met, you modify
 the styles object that's assigned to the JSX elements in the render method.
 -- NB diff to jQuery therefore:
	and its approach of applying styles by modifying DOM elements directly!
	
	i.e. React way is: When you set a style object based on a condition, you describe
	how the UI should look as a function of the application's state.
 */
 
 /* Note on 'keys' for arrays requirement
 
 When you create an array of elements, each one needs a key attribute set
 to a unique value. React uses these keys to keep track
 of which items are added, changed, or removed.
 */