import getValue from '../import-export/api.js';

const superHero = [
	{id : 12345, hero : 'Batman', power : 'mony'},
	{id : 15655, hero : 'Aquaman', power : 'fishPower'},
	{id : 88778, hero : 'SuperMan', power : 'superPower'},
];
console.log(getValue(superHero, 'hero'));
console.log(getValue(superHero, 'power'));