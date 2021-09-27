# Example of onclick problem

I am trying to log an "equation", a string composed of numbers and operators, such as 3+6, 88*7.2, or 99-1+4*33, etc to the console. 

My approach involved dynamically creating a button: at the time of creation, the equation to be logged would be stored and passed to a function, logEquation(). For testing, I first log the equation at the same time as the button is created. Checking the console at that time shows the "uncomputed" equation, e.g. 2+3 (achieved via the logEquation() function). However, pressing the button and checking the console shows the same equation but "computed", so that 2+3 logs as "5".

