const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

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

app.use(express.json())

app.get('/api/blogs', (request, response) => {
	Blog.find({}).then((blogs) => {
		response.json(blogs)
	})
})

app.post('/api/blogs', (request, response) => {
	const blog = new Blog(request.body)

	blog.save().then((result) => {
		response.status(201).json(result)
	})
})

const PORT = config.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
