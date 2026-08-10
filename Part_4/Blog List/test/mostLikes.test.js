const { describe, test } = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper')

describe('Most likes', () => {
	test('returns the author with the most total likes', () => {
		const blogs = [
			{
				_id: '9d753dd04e87d909567g40i1',
				title: 'Structure and Interpretation of Computer Programs',
				author: 'Harold Abelson',
				url: 'https://example.com/books/sicp.pdf',
				likes: 19,
				__v: 0,
			},
			{
				_id: '9d753dd04e87d909567g40i2',
				title: 'The Mythical Man-Month',
				author: 'Fred Brooks',
				url: 'https://example.com/books/mythical-man-month.pdf',
				likes: 10,
				__v: 0,
			},
			{
				_id: '9d753dd04e87d909567g40i3',
				title: 'No Silver Bullet',
				author: 'Fred Brooks',
				url: 'https://example.com/articles/no-silver-bullet',
				likes: 15,
				__v: 0,
			},
			{
				_id: '9d753dd04e87d909567g40i4',
				title: 'A Discipline of Programming',
				author: 'Edsger W. Dijkstra',
				url: 'https://example.com/books/discipline.pdf',
				likes: 17,
				__v: 0,
			},
		]

		const result = listHelper.mostLikes(blogs)

		assert.deepStrictEqual(result, {
			author: 'Fred Brooks',
			likes: 25,
		})
	})

	test('returns the author when there is only one blog', () => {
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

		const result = listHelper.mostLikes(listWithOneBlog)

		assert.deepStrictEqual(result, {
			author: 'Harold Abelson',
			likes: 19,
		})
	})

	test('returns the author with the most likes when authors have one blog each', () => {
		const blogs = [
			{
				_id: '1',
				title: 'Blog One',
				author: 'Author One',
				url: 'https://example.com/one',
				likes: 5,
				__v: 0,
			},
			{
				_id: '2',
				title: 'Blog Two',
				author: 'Author Two',
				url: 'https://example.com/two',
				likes: 20,
				__v: 0,
			},
			{
				_id: '3',
				title: 'Blog Three',
				author: 'Author Three',
				url: 'https://example.com/three',
				likes: 10,
				__v: 0,
			},
		]

		const result = listHelper.mostLikes(blogs)

		assert.deepStrictEqual(result, {
			author: 'Author Two',
			likes: 20,
		})
	})

	test('adds likes from multiple blogs by the same author', () => {
		const blogs = [
			{
				_id: '1',
				title: 'Blog One',
				author: 'Author One',
				url: 'https://example.com/one',
				likes: 8,
				__v: 0,
			},
			{
				_id: '2',
				title: 'Blog Two',
				author: 'Author One',
				url: 'https://example.com/two',
				likes: 12,
				__v: 0,
			},
			{
				_id: '3',
				title: 'Blog Three',
				author: 'Author Two',
				url: 'https://example.com/three',
				likes: 15,
				__v: 0,
			},
		]

		const result = listHelper.mostLikes(blogs)

		assert.deepStrictEqual(result, {
			author: 'Author One',
			likes: 20,
		})
	})

	test('finds the author with the highest total likes', () => {
		const blogs = [
			{
				_id: '1',
				title: 'Blog One',
				author: 'Alice',
				url: 'https://example.com/one',
				likes: 10,
				__v: 0,
			},
			{
				_id: '2',
				title: 'Blog Two',
				author: 'Bob',
				url: 'https://example.com/two',
				likes: 5,
				__v: 0,
			},
			{
				_id: '3',
				title: 'Blog Three',
				author: 'Alice',
				url: 'https://example.com/three',
				likes: 20,
				__v: 0,
			},
			{
				_id: '4',
				title: 'Blog Four',
				author: 'Bob',
				url: 'https://example.com/four',
				likes: 10,
				__v: 0,
			},
		]

		const result = listHelper.mostLikes(blogs)

		assert.deepStrictEqual(result, {
			author: 'Alice',
			likes: 30,
		})
	})

	test('returns one of the authors when there is a tie', () => {
		const blogs = [
			{
				_id: '1',
				title: 'Blog One',
				author: 'Alice',
				url: 'https://example.com/one',
				likes: 20,
				__v: 0,
			},
			{
				_id: '2',
				title: 'Blog Two',
				author: 'Bob',
				url: 'https://example.com/two',
				likes: 20,
				__v: 0,
			},
		]

		const result = listHelper.mostLikes(blogs)

		assert.ok(result.author === 'Alice' || result.author === 'Bob')
		assert.strictEqual(result.likes, 20)
	})
})
