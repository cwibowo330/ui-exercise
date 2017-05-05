# Search Challenge

This challenge provides you with a pre-configured Javascript app using React
which provides a framework within which you will implement a simple search
engine.

The main point of this exercise is to give you a chance to show us how you code,
so you really shouldn't spend any time fiddling with settings or configurations.
Just write code and solve the problem at hand.

## Getting started

Make sure you have [yarn](https://yarnpkg.com/) installed.  You should be able
to just do:
```
$ npm install -g yarn
```

Fork this repo to your own account, then:

```
$ git clone https://github.com/YOUR_GITHUB_USERNAME/ui-exercise.git
$ cd ui-exercise/search-challenge
$ yarn
$ yarn start
... implement your solution ...
$ git commit -am ''
$ git push
```

Then send us the link to your forked repo.

## The exercise

Though typically implemented server side, and accessed through an API, offline
clients and other use cases sometimes call for the ability to search a local
store of data.

In this exercise, your challenge is to implement an efficient search engine for
searching through local documents.

The framework provided implements the UI and provides the test data for you.  
You simply need to implement the search engine code itself.

Under `app/services/SearchService.js` you will find two stubbed out methods,
`addDoc` and `search`.  

`addDoc` accepts a single argument, an object containing fields and string
values.

`search` accepts a single argument, the string to search on.

When the app loads, the test documents will be sent to your `addDoc` method,
one at a time, so that you can store them for lookup.

The UI offers the user a search input field and a search button.  When the user
clicks the search button, your `search` method will be called, and should return
any matching document objects.  These will be displayed to the user.

You do not need to implement any UI code.  All of your code can live in
`SearchService.js`.

## Objectives

Our main interest is to see how you code -- how you organize code, your use of
best practices and to see how much you grasp the fundamentals of software
engineering.

Therefore, it is important that we see some actual code.  If you finish
before your time is up, that is an appropriate time to go back through your
code and perform clean up tasks, or add tests, or do whatever you think will
show us your skill set in the most effective way.
