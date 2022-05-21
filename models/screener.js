const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const { IEXCloudClient } = require("node-iex-cloud");
const fetch = require("node-fetch");

const iex_module = new IEXCloudClient(fetch, {
  sandbox: false,
  publishable: "pk_093942da8e7e4dd0ae2d7d7343a28a7c",
  version: "stable"
});

iex_module.symbol("googl").financials("quarterly").then(res => console.log(res));

const screenerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: false
  }
})

screenerSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
  }

  next()
})

//passing it to "Screener"
module.exports = mongoose.model('Screener', screenerSchema)