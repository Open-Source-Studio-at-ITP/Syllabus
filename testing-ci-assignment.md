# Open Source Data Assignment

**due Tuesday, October 2**

## Link to your pull request, repository, or write-up below:
* Jinzhong: [A Testing Function to ensure links in \*.md are accessible](https://github.com/NHibiki-NYU/UnitTestingCI/pull/1)

# Instructions

Note that this assignment can be completed any number of ways. The idea is to experiment with unit tests and continuous integration. You do not need to set up your own continuous integration or write a new test. For documentation, you may link below to a pull request, GitHub repository, or blog/medium post.

## Jest and CircleCI

1. Follow these video tutorials:
   * [Introduction to Unit Testing and Continuous Integration](https://youtu.be/CB7vnoXI0pE?list=PLRqwX-V7Uu6bLqwFa52YGEHy-L1-D_Ve-)
   * [Unit Testing with Jest](https://youtu.be/S3QwafQEvSs?list=PLRqwX-V7Uu6bLqwFa52YGEHy-L1-D_Ve-)
2. Try one or more of the following:
   * Submit a pull request to [UnitTestingCI](https://github.com/Open-Source-Studio-at-ITP/UnitTestingCI) that breaks one of the tests. Can you then edit the request with a fix so that the test passes? (Now, thanks to [#64](https://github.com/Open-Source-Studio-at-ITP/Syllabus/pull/64) as an alternative, you can also try breaking/fixing the tests here on this repo!)
   * Add a new test to [UnitTestingCI](https://github.com/Open-Source-Studio-at-ITP/UnitTestingCI). Does it pass? For reference, here is the [Jest testing documentation](https://jestjs.io/docs/en/api).
   * Fork the [UnitTestingCI](https://github.com/Open-Source-Studio-at-ITP/UnitTestingCI) and set up continous integration with CircleCI on your own account. This [video on how to set up CircleCI](https://youtu.be/0OjEx2UzLUI?list=PLRqwX-V7Uu6bLqwFa52YGEHy-L1-D_Ve-) will help.

## Another option: Mocha/Chai and Travis

The [Playground](https://github.com/Open-Source-Studio-at-ITP/Playground/) repository also has continuous integration enabled with [TravisCI](https://travis-ci.org/) and testing with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/). If you'd like to try writing some tests for the Playground or experimenting with breaking the existing tests this is also an option.

Here are some resources for the above:
* Egghead: [Setting up Unit Testing with Mocha and Chai](https://egghead.io/lessons/javascript-setting-up-unit-testing-with-mocha-and-chai)
* Egghead: [Unit Testing with Mocha and Chai](https://egghead.io/lessons/javascript-unit-testing-with-mocha-and-chai)
* Egghead: [Automatically running tests before commits with ghooks](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-automatically-running-tests-before-commits-with-ghooks)

## Another option: your own repo or another open source project?

You are welcome to set up unit testing and/or continuous integration in a new GitHub repo or contribute a test to another open source project.


