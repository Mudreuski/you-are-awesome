// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = property => property;

const createNotEnumerableProperty = property => Symbol(property);

const createProtoMagicObject = () => {
  const MagicObject = () => {};
  MagicObject.prototype = Object.getPrototypeOf(MagicObject);

  return MagicObject;
};

let count = 0;
Function.prototype.valueOf = function () { return count; };
const incrementor = () => {
  count += 1;
  return incrementor;
};

const asyncIncrementor = () => new Promise(resolve => resolve(asyncIncrementor.value++));
asyncIncrementor.value = 1;

const createIncrementer = function* () {
  let count = 1;
  while (true) {
    yield count++;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('param');
  }, 1001);
});

const getDeepPropertiesCount = (object) => {
  const prop = Object.getOwnPropertyNames(object);
  let sum = prop.length;

  prop.forEach((key) => {
    if (Object.getOwnPropertyNames(object[key]).length > 0) {
      sum += getDeepPropertiesCount(object[key]);
    }
  });

  return sum;
};

const createSerializedObject = () => solution = new String(JSON.stringify({ key: 'value' }));

const toBuffer = () => {};

const sortByProto = array => array.sort((a, b) => { a.__proto__ - b.__proto__; });

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
