const mongoose = require('mongoose')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const filterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  data: {
    type: String
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
})

filterSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  next()
})
//passing it to "Filter"
module.exports = mongoose.model('Filter', filterSchema)