## Test Driven Development Plans


### Branch Protection and CircleCI
To enforce adequate testing before branches get merged, we plan on integrating CircleCI with our GitHub repository. 
This branch protection ensures that before any code gets merged onto the master branch, there are sets of cases it must pass, 
preventing faulty code making it's way onto the master branch. 

### Testing Tools and Frameworks
Some of our group members have experience
setting up these test cases while working on previous projects, therefore, they will be able to set up cases for our 
repository as well. Along with having CircleCI integrated with our repository we will also use the Javascript test framework, Mocha along with libraries such 
Chai to test our NodeJs backend, and React Testing to test our front-end code.
Front-end testing will ensure that our product provides satisfactory interaction. It must be fast and run without error, no matter which device or browser is used.
We will also use Artillery.io for load testing to ensure we build a scable backend and APIs that perform well under high load.

### Our Testing Methodology
While we do have one member extremely competent at operating the testing functionality of the framework we have chosen, each group member will also be
required to thoroughly test their branch with their own unit test cases as well as test cases from previous branches. This will to validate that each of those units is working properly.
Team members will also ensure that test cases are well documented so that they are easy to read and maintain for other developers. 

To make our unit testing process scalable and sustainable, we will write tests as we write code or even before we write code for functions with a predictable behaviour. 
Aside from writing tests we will also maintain them, When our code changes we will ensure we also refactor the corresponding test cases. 
