'use strict';

QUnit.module('Тестируем функцию removeAllDuplicateLetters', function () {
	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('111'), '');
		assert.strictEqual(removeAllDuplicateLetters('www'), '');
		assert.strictEqual(removeAllDuplicateLetters('...'), '');
		assert.strictEqual(removeAllDuplicateLetters('   '), '');
	});

	QUnit.test('Не удаляет буквы, встречающиеся один раз', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('123'), '123');
		assert.strictEqual(removeAllDuplicateLetters('abc'), 'abc');
		assert.strictEqual(removeAllDuplicateLetters(',./'), ',./');
		assert.strictEqual(removeAllDuplicateLetters('\n\t '), '\n\t ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('привет, мир'), 'пвет, м');
		assert.strictEqual(removeAllDuplicateLetters('hello, world'), 'he, wrd');
		assert.strictEqual(removeAllDuplicateLetters('мама мыла раму'), 'ылру');
		assert.strictEqual(removeAllDuplicateLetters('"Кукареку!", сказал Петух'), 'Кр!,скзлПтух');
	});
});
