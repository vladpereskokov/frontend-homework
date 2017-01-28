'use strict';

QUnit.module('Тестируем функцию toUpperCase', function () {
	QUnit.test('Функция работает с отдельными словами', function (assert) {
		assert.strictEqual(toUpperCase('hello'), 'Hello');
		assert.strictEqual(toUpperCase('world!'), 'World!');
		assert.strictEqual(toUpperCase('привет'), 'Привет');
		assert.strictEqual(toUpperCase('мир!'), 'Мир!');
	});

	QUnit.test('Функция работает со словами из прописных букв', function (assert) {
		assert.strictEqual(toUpperCase('HELLO'), 'Hello');
		assert.strictEqual(toUpperCase('WORLD!'), 'World!');
		assert.strictEqual(toUpperCase('ПРИВЕТ'), 'Привет');
		assert.strictEqual(toUpperCase('МИР!'), 'Мир!');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(toUpperCase('hello, world!'), 'Hello, World!');
		assert.strictEqual(toUpperCase('пРиВет, МИР!'), 'Привет, Мир!');
	});
});
