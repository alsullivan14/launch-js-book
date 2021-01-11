console.log("bar is logged as 2 because foo is evoked before it is logged to the console. Foo is on the top of the call stack")
// The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope.
// Thus, the bar variable on line 3 is not the same as the one on line 1. In the end, foo() has no bearing on the final output.

