/*
------   1   -------

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

SOLUTION

function sumAll(arr) {
 const sortedArr = arr.sort((a, b) => a - b);
 let result = 0
 for (let i=sortedArr[0]; i <= sortedArr[1]; i++){
    result += i 
 }
 return result
}

------   2   -------

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


SOLUTION

function filter_list(arr) {
  const newArr = arr.slice(0) 
  return newArr.filter(a => typeof(a) === "number" && a >= 0)
}

------   3   -------

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

SOLUTION

const _ = require('lodash');

function arrayDiff(a, b) {
    if (a.length === 0){
      return []
    }
    else if (b.length === 0){
        return a
    }
    else {
    return _.difference(a, b);
    }
}

------   4   -------

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''


SOLUTION 

function list(names){
    let finalString = ""
    if (names.length === 0){
        return finalString;
    }
    else if (names.length === 1){
        return names[0].name
    }
    else{
        for (let i=0; i<names.length; i++){
        if(i < names.length-2){
            finalString += names[i].name + ", "
        }
        else if (i === names.length-2){
            finalString += names[i].name + " & "  
        }
        else{
            finalString += names[i].name
        }
        
        }
    return finalString
    }
}

------   5   -------

You live in the city of Cartesia where all roads are laid out in a perfect grid. 

You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 

The city provides its citizens with a Walk Generating App on their phones -- 

everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 

You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 

so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 

of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


SOLUTION

function isValidWalk(walk) {
  if (walk.length !== 10){
    return false;
  }
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    
    walk.forEach(element => {
        switch(element){
        case "n":
            north++;
            break;
        case "s":
            south++;
            break;
        case "e":
            east++;
            break;
        case "w":
            west++;
            break;
        }
    });
  return north - south === 0 && east - west === 0
}

*/