# Kings-1000-bottles
JS OO approach to the King and a 1000 bottles of wine challenge

Summary:
1 in 1000 bottles of wine is poisoned. 
There is only 24hrs to find out which one.
There are 10 deathrow prisoners the King will get very drunk and mostly dead by feeding a certain combination of bottles to the prisoners.
By using base 2 exponents we can use binary magic to determine the index at which the poison bottle lives.


Steps:
//Defining//
1. Initialize an indexed array [0-999] with each value = 0
2. Generate a random integer between 0-999
3. Set that index bottle to = 1
4. Define Prisoner class
5. Define poisonedBottle function that takes array of prisoner objects, and calls their methods for each prisoner, then using the remaining living prisoners adds up their exponentResults and provides the index at which the poisoned bottle lives.
6. Create prisoner factory, that creates and array of prisoners, incrementing their exponent value from 0 to numberOfPrisoners provided (we need 10 for our puzzle)

//Running//
1. Create an array of 10 prisoner objects using factory
2. Pass the prisonerArray and Bottle array to poisonedBottle function and save result to variable
3. Print result.

Can be run in node or in browser terminal.
