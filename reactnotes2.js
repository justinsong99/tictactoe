React Notes

renderSquare(i) {
	return (
		<Square
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
	);
}

/*
So basically with the code above, what we are doing is passing a function from Board
to Square. 

Now with the addition of value and onClick (which are two props we are passing from
Board to Square), the onClick prop is a function that Square can call when clicked. 

So since the Board is controlling the states of the Squares. we don't pass a function
that controls the state in the Square component. We pass props to the Squares, from
a function called renderSquare(). 

No longer need a constructor for Square because each Square does not control the state
anymore.

Since the Square components no longer maintain state, the Square components receive
values from the Board component and inform the Board component when they're clicked.
The Squares are now CONTROLLED COMPONENTS. 
*/

/*

The onCLick prop on the built-in DOM <button> component tells React to set up a click
event listener

Once the button is clicked, React will call the onClick event handler that is defined
in Square's render method

This event handler calls this.props.onClick().
*/

/*
Immutability allows for complex features become much easier to implement. 
This will allow us to implement a "time travel" feature that allows us to
review the tic-tac-toe game's history and "jump back" to previous moves

Avoiding direct data mutation lets us keep previous versions of the game's
history intact, and allows us to use them later

Detecting changes in immutable objects are easier, if the immutable object
that is being referenced is different than the previous one, then the object
has changed
*/

constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

/*
xIsNext here is a boolean that allows us to swap between X and O. 
*/

handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

/*
squares[i] = this.state.xIsNext ? 'X' : 'O' is a conditional statement
that allows us to see if the square will be an X or O when the user clicks
the square
*/

