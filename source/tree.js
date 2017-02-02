'use strict';

function tree(height) {
	return (height >= 3) ? drawTree(height) : null;
}

function drawTree(height) {
	let result = stars(height);
	result += trunk(height);
	return result;
}

function clone(string, count) {
	let result = '';
  for (let i = 1; i <= count; ++i) {
  	result += string;
  }
  return result;
}

function addLine(spaceCount, countElement, element) {
	let result = clone(' ', spaceCount);
	result += clone(element, countElement);
	result += clone(' ', spaceCount);
	result += '\n';
	return result;
}

function stars(height) {
	let result = '';
	let space = height - 2;
	for (let i = 1; i <= 2 * height - 3; i += 2) {
		result += addLine(space, i, '*');
		--space;
	}
	return result;
}

function trunk(height) {
	return addLine(height - 2, 1, '|');
}