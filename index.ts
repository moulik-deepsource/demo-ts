// JS-0293: Requires using either `T[]` or `Array<T>` for arrays

const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];

// JS- 0296: Detected specific types being used

// use lower-case primitives for consistency
const str: String = 'foo';
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol('foo');

// use a proper function type
const func: Function = () => 1;

// use safer object types
const lowerObj: object = {};
const capitalObj1: Object = 1;
const capitalObj2: Object = { a: 'string' };
const curly1: {} = 1;
const curly2: {} = { a: 'string' };
