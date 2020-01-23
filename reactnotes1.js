Notes for React Tutorial

class ShoppingList extends React.Component {
	render() {
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
			);
	}
}

/*
ShoppingList is a React component class, or React component type.
A component takes in parameters, called props, and returns a hierarchy of views
to display via the render method.
*/

/*
The render method returns a description of what you want to see on the screen.
Render returns a React element, which is a lightweight description of what to
render.

Most React developers will use a special syntax called "JSX" which makes these
structures easier to write.

The <div /> syntax is transformed at build time to React.createElement('div').

The above code is transformed into
*/

return React.createElement('div', {className: 'shopping-list'},
	React.createElement('h1', /* ... h1 children ... */),
	React.createElement('ul', /* ... ul children ... */)
	);

/*
JSX is a syntax extension to JavaScript. 

For an example:
*/

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
	element,
	document.getElementbyId('root')
);

/*
You can put any valid JavaScript expression inside the curly braces in JSX.
For example:
- 2 + 2;
- user.firstName;
- formatName(user);

You can also use JSX inside of if statements and for loops:
For an example...
*/

function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>
}

/* Moving on to the actual starter code: */
/* Notice that we have 3 React components from the get go */
- class Square extends React.component
- class Board extends React.component
- class Game extends React.component

/*
So, after we pass a prop called value to the Square:
	return <Square value={i} />;
We are able to use that in the Square component
We have just "passed a prop" from a parent Board component to a child Square component.
Passing props is how information flows in React apps, from PARENTS to CHILDREN.
*/

/*
So when you create some kind of button for each of the squares in the tic-tac-toe board
you can use JSX to shorten the syntax for creating a function called onClick, which
for right now, has the function of alerting the user through the browser that the user
just "clicked" the button

Now we want to remember that each Square was clicked, and afterwards, fill it with an X
marker. To "remember" things in React, we must use STATE.
*/


/*
So, React components can have state by setting this.state in their CONSTRUCTORS.
this.state is PRIVATE to the component that it is defined in. 
So what we are doing now, is storing our current value of the Square in this.state
and then changing it when the Square is clicked.

NOTE: In Javascript classes, you need to always call super when defining the constructor
of a subclass. All React component classes that have a constructor should start it
with a super(props) call.
*/

/*
By calling this.setState from an onClick handler in the Square's render method,
we tell React to re-render that Square whenever its <button> is clicked.
After the update, the Square's this.state.value will be 'X', so we'll see the X on
the game board.

When you are calling setState in a component, React automatically updates the 
child components inside of it too.
*/

/*
To collect data from multiple children, or to have two child components communicate
with each other, you need to declare the shared state in their parent component instead.
The parent component can pass the state back down to the children by using props;
this keeps the child components in sync with each other and with the parent component.
*/

/*
Creating an array of 9 nulls corresponding to some 9 squares:\
*/

squares: Array(9).fill(null);

