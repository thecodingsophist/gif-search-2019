//require is the javescript way of saying 'import'
const express = require('express');

//once you import express, you can set it to a variable that you can use later
//for example, it is used to set up middleware such as handlebars
const app = express();

// middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTES

//home route
app.get('/', (req, res) => {
  res.render('home')
})

// simple puppies gif endpoint
app.get('/puppies', (req, res) => {
  // set the url of the gif
  const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
  // render the hello-gif view, passing the gifUrl into the view to be displayed
  res.render('hello-gif', { gifUrl })
})

// greetings endpoint
app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})

// START SERVER

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
