'use strict';

QUnit.module('Тестируем функцию union', function () {
	const arrayCompare = function (actual, expected, assert) {
		assert.ok(actual.length === expected.length, `Длина полученного массива не совпадает с длиной ожидаемого (${expected.length}!==${actual.length})`);

		for (let pos = 0; pos < actual.length; pos++) {
			const el = actual[pos];

			let count1 = 0;
			let count2 = 0;

			for (let i = 0; i < actual.length; i++) {
				if (Object.is(actual[i], el)) {
					count1++;
				}
				if (Object.is(expected[i], el)) {
					count2++;
				}
			}

			assert.ok(count1 === count2, `Количество элементов '${JSON.stringify(el)}' не совпадает в ожидаемом и полученном массивах (${count2} и ${count1})`);
		}
	};

	QUnit.test('union работает с единственным массивом', function (assert) {
		arrayCompare(union([]), [], assert);
		arrayCompare(union([1]), [1], assert);
		arrayCompare(union([42]), [42], assert);
		arrayCompare(union(['a']), ['a'], assert);
		arrayCompare(union(['a', false]), ['a', false], assert);
		arrayCompare(union([NaN, Infinity]), [Infinity, NaN], assert);
	});

	QUnit.test('union работает с одинаковыми массивами', function (assert) {
		arrayCompare(union([], []), [], assert);
		arrayCompare(union([1], [1]), [1], assert);
		arrayCompare(union([42], [42], [42], [42]), [42], assert);
		arrayCompare(union(['a', 'a']), ['a'], assert);
		arrayCompare(union(['a', false], [false, 'a']), ['a', false], assert);
		arrayCompare(union([NaN, Infinity, NaN], [NaN, Infinity, NaN]), [Infinity, NaN, NaN], assert);
	});

	QUnit.test('union работает с разными массивами', function (assert) {
		arrayCompare(union([], [1], [2]), [1, 2], assert);
		arrayCompare(union([1], [1], [1, 2]), [1, 2], assert);
		arrayCompare(union([1, 2, 3], [1, 2, 4], [1, 2, 5]), [2, 1, 3, 4, 5], assert);
		arrayCompare(union([1, 2, 2], [2, 2, 3], [1, 2, 2, 5], [null, 2, '2', 2, false]), [1, 2, 2, 3, 5, '2', null, false], assert);
		arrayCompare(union(['1', '2', '3', true], [1, 2, 3, true], [1, 2, '3', false]), ['1', '2', '3', 1, 2, 3, true, false], assert);
	});
});
