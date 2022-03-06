const express = require('express')
//getting the model of the screener page from screener.js
const Screener = require('../models/screener')
const Filter = require('../models/filter')
const router = express.Router()

router.get('/new', async (req, res) => {
//insert test filters if needed here!!!
  Filter.find({}, function(err, filtersMiddle){
    if(err){
      console.log(err)
    } else{
      res.render('screeners/new', { screener: new Screener(), filtersHTML: filtersMiddle })
    }
  })
})

router.get('/screener_list', async (req, res) => {
  const screener = await Screener.find().sort({ createdAt: 'desc' })
  res.render('screeners/screener_list', { screener: screener})
})

router.get('/edit/:id', async (req, res) => {
  const screener = await Screener.findById(req.params.id)
  res.render('screeners/edit', { screener: screener })
})


router.get('/:slug', async (req, res) => {
  const screener = await Screener.findOne({ slug: req.params.slug })
  if (screener == null) res.redirect('/')
  res.render('screeners/show', { screener: screener })
})

router.post('/', async (req, res, next) => {
  req.screener = new Screener()
  next()
}, saveScreenerAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
  req.screener = await Screener.findById(req.params.id)
  next()
}, saveScreenerAndRedirect('edit'))


router.delete('/:id', async (req, res) => {
  await Screener.findByIdAndDelete(req.params.id)
  res.redirect('/')
})





function saveScreenerAndRedirect(path) {
  return async (req, res) => {
    let screener = req.screener
    screener.title = req.body.title

    try {
      screener = await screener.save()
      res.redirect(`/screeners/${screener.slug}`)
    } catch (e) {
      res.render(`screeners/${path}`, { screener: screener })
    }
  }
}

module.exports = router