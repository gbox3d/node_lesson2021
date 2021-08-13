import _ from 'lodash'

var objects = [{ 'a': 1 }, { 'b': 2 }];

let _objects = objects;
console.log(_objects === objects);

console.log('---- clone----')
let objects2 = _.clone(objects)
console.log(objects === objects2);
console.log(objects[0] === objects2[0]);

console.log('----deep clone----')
let objects3 = _.cloneDeep(objects)
console.log(objects === objects3)
console.log(objects[0] === objects3[0])