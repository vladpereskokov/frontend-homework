'use strict';

QUnit.module('Тестируем функцию fromHex', function () {
	QUnit.test('Функция fromHex работает правильно', function (assert) {
		assert.strictEqual(fromHex('0'), '0b');
		assert.strictEqual(fromHex('1'), '1b');
		assert.strictEqual(fromHex('2'), '10b');
		assert.strictEqual(fromHex('-1'), '-1b');
		assert.strictEqual(fromHex('-2'), '-10b');
		assert.strictEqual(fromHex('0x0'), '0b');
		assert.strictEqual(fromHex('0x3'), '11b');
		assert.strictEqual(fromHex('-0x3'), '-11b');

		assert.strictEqual(fromHex('A'), '1010b');
		assert.strictEqual(fromHex('-b'), '-1011b');

		assert.strictEqual(fromHex('0xA0'), '10100000b');
		assert.strictEqual(fromHex('0x9d'), '10011101b');
	});
});
