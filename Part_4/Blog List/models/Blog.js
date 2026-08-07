const mongoose = require('mongoose')
const config = require('../utils/config')
const logger = require('../utils/logger')

const blogSchema = mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

mongoose
	.connect(config.MONGODB_URI, { family: 4 })
	.then(logger.info('connected to mongoDB'))
	.catch((error) =>
		logger.error(`couldn't connect to mongoDB with error: ${error}`),
	)

module.exports = Blog
