const { describe, test } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('Most Blogs', () => {
	const listWithOneBlog = [
		{
			_id: '9d753dd04e87d909567g40i1',
			title: 'Structure and Interpretation of Computer Programs',
			author: 'Harold Abelson',
			url: 'https://example.com/books/sicp.pdf',
			likes: 19,
			__v: 0,
		},
	]
	const listWithTwoSame = [
		{
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
			likes: 5,
			__v: 0,
		},
		{
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
			likes: 1,
			__v: 0,
		},
		{
			_id: '2f975ff26g09f121789i62k3',
			title: 'The Pragmatic Programmer',
			author: 'Andrew Hunt',
			url: 'https://example.com/books/pragmatic-programmer.pdf',
			likes: 41,
			__v: 0,
		},
		{
			_id: '3g086gg37h10g232890j73l4',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/introduction-to-algorithms.pdf',
			likes: 23,
			__v: 0,
		},
		{
			_id: '4h197hh48i21h343901k84m5',
			title: 'You Don’t Know JS',
			author: 'Kyle Simpson',
			url: 'https://example.com/books/you-dont-know-js.pdf',
			likes: 16,
			__v: 0,
		},
		{
			_id: '5i208ii59j32i454012l95n6',
			title: 'Refactoring',
			author: 'Martin Fowler',
			url: 'https://example.com/books/refactoring.pdf',
			likes: 38,
			__v: 0,
		},
	]
	const listWiththreeSame = [
		{
			_id: 'a123456789abcdef12345678',
			title: 'Clean Code',
			author: 'Robert C. Martin',
			url: 'https://example.com/books/clean-code.pdf',
			likes: 27,
			__v: 0,
		},

		{
			_id: 'a123456789abcdef12345678',
			title: 'Clean Code',
			author: 'Robert C. Martin',
			url: 'https://example.com/books/clean-code.pdf',
			likes: 27,
			__v: 0,
		},

		{
			_id: 'b23456789abcdef012345679',
			title: 'Refactoring',
			author: 'Martin Fowler',
			url: 'https://example.com/books/refactoring.pdf',
			likes: 38,
			__v: 0,
		},

		{
			_id: 'c3456789abcdef0123456780',
			title: 'The Pragmatic Programmer',
			author: 'Andrew Hunt',
			url: 'https://example.com/books/pragmatic-programmer.pdf',
			likes: 41,
			__v: 0,
		},

		{
			_id: 'd456789abcdef01234567891',
			title: 'Design Patterns',
			author: 'Erich Gamma',
			url: 'https://example.com/books/design-patterns.pdf',
			likes: 34,
			__v: 0,
		},
		{
			_id: 'a123456789abcdef12345678',
			title: 'Clean Code',
			author: 'Robert C. Martin',
			url: 'https://example.com/books/clean-code.pdf',
			likes: 27,
			__v: 0,
		},
	]
	const listWithFiveSame = [
		{
			_id: 'e56789abcdef012345678912',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/algorithms.pdf',
			likes: 23,
			__v: 0,
		},

		{
			_id: 'e56789abcdef012345678912',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/algorithms.pdf',
			likes: 23,
			__v: 0,
		},
		{
			_id: 'e56789abcdef012345678912',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/algorithms.pdf',
			likes: 23,
			__v: 0,
		},
		{
			_id: 'e56789abcdef012345678912',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/algorithms.pdf',
			likes: 23,
			__v: 0,
		},

		{
			_id: 'f6789abcdef0123456789123',
			title: 'JavaScript: The Good Parts',
			author: 'Douglas Crockford',
			url: 'https://example.com/books/javascript-good-parts.pdf',
			likes: 31,
			__v: 0,
		},

		{
			_id: 'g789abcdef01234567891234',
			title: 'The Mythical Man-Month',
			author: 'Frederick P. Brooks Jr.',
			url: 'https://example.com/books/mythical-man-month.pdf',
			likes: 12,
			__v: 0,
		},
		{
			_id: 'e56789abcdef012345678912',
			title: 'Introduction to Algorithms',
			author: 'Thomas H. Cormen',
			url: 'https://example.com/books/algorithms.pdf',
			likes: 23,
			__v: 0,
		},
		{
			_id: 'h89abcdef012345678912345',
			title: 'You Don’t Know JS',
			author: 'Kyle Simpson',
			url: 'https://example.com/books/you-dont-know-js.pdf',
			likes: 16,
			__v: 0,
		},
	]

	test('of empty list is null', () => {
		assert.deepStrictEqual(listHelper.mostBlogs([]), null)
	})

	test('only one value on list', () => {
		assert.deepStrictEqual(listHelper.mostBlogs(listWithOneBlog), {
			author: 'Harold Abelson',
			blogs: 1,
		})
	})

	test('with two same author', () => {
		assert.deepStrictEqual(listHelper.mostBlogs(listWithTwoSame), {
			author: 'Edsger W. Dijkstra',
			blogs: 2,
		})
	})

	test('with three same author', () => {
		assert.deepStrictEqual(listHelper.mostBlogs(listWiththreeSame), {
			author: 'Robert C. Martin',
			blogs: 3,
		})
	})

	test('with five same author', () => {
		assert.deepStrictEqual(listHelper.mostBlogs(listWithFiveSame), {
			author: 'Thomas H. Cormen',
			blogs: 5,
		})
	})
})
