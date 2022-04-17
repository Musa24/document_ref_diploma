// https://app.diagrams.net/?client=1
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const engine = require('ejs-mate');
const session = require('express-session');
const app = express();
// Passport
const passport = require('passport');
const LocalStrategy = require('passport-local');

const documentLevelRoutes = require('./routes/classifications/documentLevelRoutes');
const documentTypeRoutes = require('./routes/classifications/documentTypeRoutes');
const documentTC = require('./routes/classifications/documentTCRoutes');
const documentStatus = require('./routes/bibliographic/documentStatusRoutes');
const documentRegAppAuth = require('./routes/bibliographic/documentRegAppAuth');
const documentPhaseLCPAS = require('./routes/bibliographic/documentPhaseLCPAS');
const documentPhaseStage = require('./routes/informative/documentPhaseStage');
const documentContentComponent = require('./routes/informative/documentContentComponent');
const documentRegGroup = require('./routes/informative/documentRegGroup');
const documentClassifierGroup = require('./routes/classifications/OKS/documentClassifierGroup');
const documentClassifierSubGroup = require('./routes/classifications/OKS/documentClassifierSubGroup');
const documentClassifierSubGroupGroup = require('./routes/classifications/OKS/documentClassifierSubGroupGroup');
const documentClassifierGroup_KGS = require('./routes/classifications/KGS/documentClassifierGroup');
const documentClassifierSubGroup_KGS = require('./routes/classifications/KGS/documentClassifierSubGroup');
const documentClassifierSubGroupGroup_KGS = require('./routes/classifications/KGS/documentClassifierSubGroupGroup');

// Middleware Helper
const { isLoggedIn } = require('./middleware');
// User route
const userRoute = require('./routes/userRoute');

// Main document
const document = require('./routes/document');

// User models
const User = require('./models/user');

// document Controller
const {
  getAllDocumentsController,
} = require('./controllers/documentController');

// configuration
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// methodOverride
app.use(methodOverride('_method'));

// Session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//connect to the database
mongoose.connect(
  'mongodb+srv://musa24:hunter123456@documentsdb.jasux.mongodb.net/documentDB?retryWrites=true&w=majority',
  function (err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('База данных уже подключена');
  }
);

// Middleware
app.use((req, res, next) => {
  if (req.user) {
    if (req.user.isAdmin) {
      res.locals.showSideMenu = true;
      res.locals.showButton = true;
    } else {
      res.locals.showSideMenu = false;
      res.locals.showButton = false;
    }
  }
  next();
});

app.get('/admin', (req, res) => {
  res.render('index.ejs', {
    showSideMenu: true,
  });
});

app.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.render('home.ejs', {
      showSideMenu: false,
    });
  } else {
    if (req.user.isAdmin) {
      return res.redirect('/admin');
    }
    return res.redirect('/document');
  }
});

app.get('/document', isLoggedIn, getAllDocumentsController);

// Main document
app.use('/admin/document', document);
// Others
app.use('/admin/documentLevel', documentLevelRoutes);
app.use('/admin/documentType', documentTypeRoutes);
app.use('/admin/documentTC', documentTC);
app.use('/admin/documentStatus', documentStatus);
app.use('/admin/documentRegAppAuth', documentRegAppAuth);
app.use('/admin/documentPhaseLCPAS', documentPhaseLCPAS);
app.use('/admin/documentPhaseStage', documentPhaseStage);
app.use('/admin/documentContentComponent', documentContentComponent);
app.use('/admin/documentRegGroup', documentRegGroup);
app.use('/admin/documentClassifierGroup', documentClassifierGroup);
app.use('/admin/documentClassifierSubGroup', documentClassifierSubGroup);
app.use(
  '/admin/documentClassifierSubGroupGroup',
  documentClassifierSubGroupGroup
);
app.use('/admin/KGS/documentClassifierGroup', documentClassifierGroup_KGS);
app.use(
  '/admin/KGS/documentClassifierSubGroup',
  documentClassifierSubGroup_KGS
);
app.use(
  '/admin/KGS/documentClassifierSubGroupGroup',
  documentClassifierSubGroupGroup_KGS
);

// User
app.use('/', userRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`сервер работает на порту ${PORT}`);
});
