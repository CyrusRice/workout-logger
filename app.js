const express = require('express');
const app = express();

// listen for requests
app.listen(3000);

app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});