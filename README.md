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
