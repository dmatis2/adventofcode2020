# adventofcode2020

My solutions for Advent of code 2020

## Day #1

- use `for` loop and `includes` function to check if `2020 - number` is in input
- use 2 `for` loops and `includes` function, same principle as part 1

## Day #2

- loop through the list and check if letter count is valid
- checking if ONLY one position for specific letter is valid

## Day #3

- use 2D array to store all directions, loop through them and calculate count of #

## Day #4

- parse input and validate all required fields

## Day #5

- can be solved using binary search or simply replacing letters with 0s a 1s to make binary numbers

## Day #6

- make a `Set` from answers and fold it to generate value
- use `every` function to get only answers that are answered yes by everyone and fold it to generate value

## Day #7

- using `Queue` structure to get all bags iteratively
- using `hashmap` and recursion to get all bags that can be inside other bags recursively

## Day #8

- parse input and simulate machine execution with memory and instruction pointer and array of indexes of already executed commands to catch a loop
- get indexes of all `jmp` and `nop` commands and test one by one by changing and running through `some` function which will stop after first truthy value returned

## Day #9

- loop through the list since 26th item using `every` function and test if there are some numbers that sum up to the number using `some` function
- loop through the list from the beginning and add adjacent numbers until value is bigger than invalid number... if sum if equal to that number, print sum of the smallest and biggest of this subarray

## Day #10

- sort the array and count all adjacents that sum up to max 3
- use dynamic programming and recursion to solve combinations for smaller lists and sum them up

## Day #11

- create temp list of new seats, iterate over all seats in old view and update new list and after all seats completed update old list and check if they're same, if they're, cound # in list
- same as part one, but need to go in every direction until find first L or #

## Day #12

- Create state object with all positions, direction, update after every action and print absolute values of n-s and e-w
- Create waypoint state object with all positions, update after every action, if F action update ship state object and then print abs of n-s and e-w from ship state machine

## Day #13

- Find the higher mupliple of bus ID with has the smallest difference with actual time
- use LCM (Least Common Multiple) to find the first timestamp to satisfy all the buses

## Day #14

- simply transform number to binary string, change 0s and 1s in number and save them in hashmap and sum all values
- iterate over all addressses and mask bits and if there is X, push to temporary address array two addresses with 0 and 1 where X should be placed, save them in hashmap and sum all values in that map

## Day #15

- store in hashmap all seen numbers and at which turn

## Day #16

- not finished

## Day #17

- use 3D array to store active & inactive cubes, store updates in temporary 3D array and after turn store it in original array (same as day #11)
- bruteforce

## Day #18

- recursively evaluate expressions in parenthesses, substitute result into original expression, then loop through expression, evaluate _a_ _op_ _b_, substitute it until there is only 1 number
- same as part one, just match + instead of \* in regexes

## Day #19

- recursively build RegExp pattern for each rule (also use memoization to speed up)
- seeing that only important rules are 0, 8, 11, 31 and 42 and that 8 and 11 contains a loop, we can create regex to match those loop as patterns and then simply count number of occurences of rule 42 and 31 and that rule 42 should be matched at least one more time than rule 31

## Day #20

- get all borders with their reversed version (all possible combinations) and match each other and get IDs of those that have exactly 2 borders (corners)
- part2 not done yet

## Day #21

- create a counter of ingredients mentioned, build hashmap of allergens-ingredients and filter only duplicates to ensure match correct, iterate over map until it's empty and remove all remaining duplicates, sum inverse ingredients
- since we have hashmap of ingredient-allergens, we can simply sort and join by comma

## Day #22

- use `queue` structure to simulate playing and loop over while both have at least one card in it, then simply fold using reduce on reversed array to calculate sum of products
- recursively simulate playing and before each round check using cache if that particular permutation of players decks were already in some round in this game
