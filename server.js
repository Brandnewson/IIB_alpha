  //TO SET UP SERVER
const express = require('express')
const mongoose = require('mongoose')
const Screener = require('./models/screener')
const screenerRouter = require('./routes/screeners')
const methodOverride = require('method-override')
const app = express()

const authRoute = require('./routes/auth');

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://brandnewson:hCXHPECb4zt1t6rT@brandy-cluster.3tsis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true
 })

//Find out how to import from local host and bring over to brandy-cluster 
//mongoose.connect('mongodb://localhost/blog', {
//  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
//})

let db = mongoose.connection
//check connection
db.once('open', function(){
  console.log('Connected to MongoDB') 
})

//clientID: 
  //TO SET UP ROUTES

app.set('view engine', 'ejs')
//tells express that we can access the "title", "description" etc when creating a new article
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

//if anyone uses this URL, this is fired
app.use('/public', express.static('public'));

//{screener: screener} first variable: what is in index.ejs, second var: what you assign, i.e. const screener = .....
app.get('/', async (req, res) => {
  const screener = await Screener.find().sort({ createdAt: 'desc' })
  res.render('screeners/index', { screener: screener})
})


app.get('/js/newscript.js',function(req,res){     
  res.sendFile(path.join(__dirname + '/js/newscript.js'));  
});

app.get('/js/filter_bank.js',function(req,res){     
  res.sendFile(path.join(__dirname + '/js/filter_bank'));  
});

  //SET UP ROUTERS
app.use('/screeners', screenerRouter)
app.use('/api/user', authRoute);

app.listen(5000)