# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect usage of the `useEffect` hook.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Bug Description

The original code attempts to increment a counter within the `useEffect` hook, adding `count` to the dependency array, creating a continuous update cycle leading to an infinite loop and application crash.

## Solution

The solution in `bugSolution.js` corrects the dependency array to an empty array `[]` which makes sure the effect only runs once after the initial render, preventing the infinite loop.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in the console and the infinite loop behavior in the original version.
5. Review the `bugSolution.js` for the corrected implementation.