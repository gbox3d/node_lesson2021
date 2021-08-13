import _ from 'lodash'

const _input = [1,2,3,4];

let _output = _.map(_input,(o)=> {
    console.log(o)
    return o*o;
})

console.log(_output)

//select = map
var users = [
    { 'user': 'barney',age : 10 },
    { 'user': 'fred', age : 20 }
  ];

let _users = _.map(users,'age')

console.log(_users)