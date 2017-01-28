'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 2, 'euclid(6006, 3738735, 51051) === 3003');
	});
});
