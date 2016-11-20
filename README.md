# Instructions

## Problem description

In social media it is common to tag content in text starting one word with #.
For example, in the following sentence we can find the tags **annoying**, **rude** and **whygodwhy**.

> I hate when people smoke e-cigarettes indoors. #annoying #rude #whygodwhy


Your task is to implement the function getTags. The prototype can be found in the file tags.js:

```javascript
function getTags(text) {

}
```

The functions receives 1 string as parameter and it should return an array with the list of all the found tags.

In addition, tests for this functions should be created with mocha. Ideally, a TDD approach should be followed, making a new commit for every new step in the process (For example, you create the test, you commit. THen you make the test pass and you commit again). The goal is also getting a 100% coverage in the tests, while writing enough tests to ensure that the whole functionality is properly tested. Apart from the description above, the following rules apply:
- Tags should be always lowercase.
- Tags have a nimimum length of 3 characters and a maximun length of 120


In order to solve the problem you can use any open source third-party libraries from the npm registry.

Once the problem is solved, please open a pull request with your solution.

## Before starting

Install dependencies:

```sh
$ npm install
```

## Running the tests

```sh
$ gulp test
```
