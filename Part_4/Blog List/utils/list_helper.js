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

module.exports = { dummy, totalLikes, favoriteBlog }
