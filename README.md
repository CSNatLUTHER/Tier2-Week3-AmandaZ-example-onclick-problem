# Example of onclick problem

I am trying to log an "equation", a string composed of numbers and operators, such as 3+6, 88*7.2, or 99-1+4*33, etc to the console. 

My approach involved dynamically creating a button that would run an equation, logEquation, to display it on the console. The button is created with onclick="logEquation(equation)", so that when it is pressed, it will log whatever the current equation is. 

For testing, I also run logEquation(equation) at the same time the button is created. At this point, it logs "uncomputed", so that if the equation is 2+5, you see 2+5 in the console.

However when you press the button and logEquation(equation) is run again, that 2+5 is logged as 7, the "computed" answer. 