const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require('./public/js/mongodb');

const tempelatePath = path.join(__dirname, 'templates');

let username = null;
console.log(username);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', tempelatePath);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/home', (req, res) => {
  console.log(username);
  res.render('home', { user: username });
});

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    console.log('hi');
    const data = {
      name: req.body.username,
      password: req.body.password,
    };
    console.log(data);

    const user = await collection.find({
      name: data.name,
      password: data.password,
    });

    if (user.length > 0) {
      res.render('signupFailed');
    } else {
      //to deal with mongodb we use await function
      await collection.insertMany([data]);
      username = data.name;
      res.redirect('/home');
    }
  } catch (error) {
    console.log(error.toString());
  }
});

app.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    console.log('login');
    const data = {
      name: req.body.username,
      password: req.body.password,
    };
    console.log(data);
    //to deal with mongodb we use await function
    const user = await collection.find({
      name: data.name,
      password: data.password,
    });
    console.log(user);

    if (user.length > 0) {
      username = data.name;
      console.log(username);
      res.redirect('/home');
      console.log('login');
    } else {
      //   res.send('wrong inputs');
      console.log('wrong input');
      res.render('loginFailed');
    }
  } catch (error) {
    console.log(error.toString());
  }
});

app.listen(3000, () => {
  console.log('port connected');
});
