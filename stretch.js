// ⭐️ ### Task 3 - Stretch Goals ⭐️

/*

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures.
There are no tests for these problems. See if you can complete one or more of the following challenges:


1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready
for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
*/
```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

        // My predicted output: "a defined? false" and "b defined? true"
        // Actual output: "a defined? false" and "b defined? true"

        // var a is undefined because when it is assigned the value of b, b has not yet been assigned a value.
        // Then, b is assigned the value of 3, which makes it defined when b is called.


/*
2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).
*/
```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

        function createBase(base) {
            return function(add) {
                return base + add;
            }
        }

        var addSix = createBase(6);
        alert(addSix(10));
        alert(addSix(21));


/*
3. Research the differences between functional programming and object oriented programming. Then,
describe the pros and cons of functional programming vs object-oriented programming. This is a common
interview question and great practice!


      Object-oriented languages work well with a fixed set of operations on things. The existing classes are left alone
      and new classes are added which implement existing methods.Functional languages work well when you have a fixed set
      of things and primarily add new operations on existing things as your code evolves. The existing functions are
      untouched, and new functions are added that compute with existing data types.

      Here is a breakdown of the differences between functional and object oriented programming:

          Functional Programming                                    Object Oriented Programming
          Definition: focuses on function evaluation                Definition: focuses on the concept of objects
          Data: uses immutable data                                 Date: uses the mutable data
          Model: Follows a declarative programming model            Model: Follows an imperative programming model
          Support: Supports parallel programming                    Support: Does not support parallel programming
          Execution: Statements can be excluded in any order        Execution: Statements executed in particular order
          Iteration: Uses recursion                                 Iteration: Uses loops
          Basic element: Functions & variables                      Basic element: Objects & methods

      Some of the advantages of object-oriented programming include:

          1. OOP languages can offer improved software-development productivity because they are:
          
              a. Modular. They povide separation of duties in object-based program development.
                  Part of the system can be updated in case of issues without a need to make large-scale changes.

              b. Extensible. Objects can be extended to include new attributes and behaviors.

              c. Reusable. OOP languages provide rich object libraries and reusable code resources.
                  Objects can be reused within and across applications. This provides faster development processes.
                  The reuse of software also lowers development cost.

          2. OOP languages also provide improved software maintainability because of the reasons presented above.

          4. Typically, OOP analysis and design is frontloaded with more time and effort, which lowers the overall
          cost of development.

          5. Faster development and lower development costs lead to higher quality software, allowing more time and
          resources to be used in software verification. Although quality is usually dependent upon the experience of
          the deveopment teams, object-oriented programming tends to result in higher-quality software even with less
          experienced developers.
          
          
      Some of the disadvantages of object-oriented programming include:
          
          1. Object-orinted programming (OOP) languages have a steep learning curve. The process of acquiring this
          knowledge is not always natural. Thus, learning an OOP language and its key techiniques (such as inheritance,
          polymorphism, closure, etc.) can be challenging and very time consuming for some people. 

          2. OOP languages typically require more coding than procedural programs.

          3. OOP programs sometimes run slower than functional programs that are procedure based, because OOP programs
          typically required more instructional executions.
          
          4. OOP programming may not suit all problem solutions. For example, some problems are more suited to functional-
          programming style, logic-programming style, or procedure-based programming style. Thus, applying an OOP languge 
          in those situations is not efficient. 

      Some of the pros of functional programming are:

          1. If you implement dry, clean, transparent functions, you can achieve reliable results and avoid unwanted side
          effects. Your code can perform exactly the way you intended it.
          
          2. Functional programming implements a declarative style. It focuses primarily on what needs to be done as opposed
          to how to do it. It emphasizes efficiency and optimisation.

      Some of the cons of functional programming are: 
      
          1. It is a relatively new paradigm. Consequently, documentation or helpful information is sometimes difficult to
          locate.
          
          2. Sometimes it may become illegible because of multiple large number of functions.
