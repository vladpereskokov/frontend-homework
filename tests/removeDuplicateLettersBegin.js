'use strict';

QUnit.module('Тестируем функцию removeDuplicateLettersBegin', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(removeDuplicateLettersBegin('1234'), '1234');
		assert.strictEqual(removeDuplicateLettersBegin('abcd'), 'abcd');
		assert.strictEqual(removeDuplicateLettersBegin('олдж фыва'), 'олдж фыва');
		assert.strictEqual(removeDuplicateLettersBegin(',.;=\n\t '), ',.;=\n\t ');
	});

	QUnit.test('Удаляет повторяющиеся символы, оставляя только один', function (assert) {
		assert.strictEqual(removeDuplicateLettersBegin('1111'), '1');
		assert.strictEqual(removeDuplicateLettersBegin('aaaa'), 'a');
		assert.strictEqual(removeDuplicateLettersBegin('ыыыы'), 'ы');
		assert.strictEqual(removeDuplicateLettersBegin('==== ||||'), '= |');
	});

	QUnit.test('Оставляет символ, который встречался в строке раньше всего', function (assert) {
		assert.strictEqual(removeDuplicateLettersBegin('12111'), '12');
		assert.strictEqual(removeDuplicateLettersBegin('qwqqq'), 'qw');
		assert.strictEqual(removeDuplicateLettersBegin('ыцыыы'), 'ыц');
		assert.strictEqual(removeDuplicateLettersBegin('=*=== |+|||'), '=* |+');
	});

	QUnit.test('Работает правильно на случайных строчках', function (assert) {
		assert.strictEqual(removeDuplicateLettersBegin('мама мыла раму'), 'ма ылру');
		assert.strictEqual(removeDuplicateLettersBegin('от топота копыт'), 'от пакы');
		assert.strictEqual(removeDuplicateLettersBegin('hello world'), 'helo wrd');
	});
});
