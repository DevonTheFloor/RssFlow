const express = require('express'),
  bodyParser = require('body-parser'),
  devwebRoutes = require('./routes/devweb'),
  adminRoutes = require('./routes/admin'),
  loginRoutes = require('./routes/login'),
  userRoutes = require('./routes/user'),
  mongoose = require('mongoose');

mongoose.connect(process.env.RSS_DBS,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => console.log('Connexion DBs OK'))
.catch(() => console.log('Erreur connection DBs'))

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/admin', adminRoutes);
app.use('/devweb', devwebRoutes);
app.use('/login', loginRoutes);
app.use('/user', userRoutes)


module.exports = app;
