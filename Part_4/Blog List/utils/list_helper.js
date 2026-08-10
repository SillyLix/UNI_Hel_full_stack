const dummy = (blogs) => {
	return 1
}
const totalLikes = (blogs) => {
	let sum = 0

	if (blogs.length === 0) return 0

	blogs.map((blog) => {
		sum += blog.likes
	})

	return sum
}

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) return null

	const max = Math.max(...blogs.map((blog) => blog.likes))

	result = blogs.filter((blog) => blog.likes === max)
	return result[0]
}

const mostBlogs = (blogs) => {
	if (blogs.length === 0) {
		return null
	}

	let authors = []

	blogs.forEach((blog) => {
		const index = authors.findIndex((author) => author[0] === blog.author)

		if (index !== -1) {
			authors[index][1]++
		} else {
			authors.push([blog.author, 1])
		}
	})

	let maxValue = -1
	let returnValue = {}
	authors.forEach((author) => {
		if (author[1] > maxValue) {
			maxValue = author[1]
			returnValue = {
				author: author[0],
				blogs: author[1],
			}
		}
	})

	return returnValue
}

const mostLikes = (blogs) => {
	if (blogs.length === 0) {
		return null
	}

	let authors = []

	blogs.forEach((blog) => {
		const index = authors.findIndex((author) => author[0] === blog.author)

		if (index !== -1) {
			authors[index][1] += blog.likes
		} else {
			authors.push([blog.author, blog.likes])
		}
	})

	let maxValue = -1
	let returnValue = {}
	authors.forEach((blog) => {
		if (blog[1] > maxValue) {
			maxValue = blog[1]
			returnValue = {
				author: blog[0],
				likes: blog[1],
			}
		}
	})

	return returnValue
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
