// Example 1
// var name = 'Andi Ramdani';
// var age = 23;

// function Print() {
//     console.log(name + " " + age + " years old");
// }

// module.exports.name = name;
// module.exports.age = age;
// module.exports.print = Print();

// Example 2
module.exports = {
    name : 'Andi Ramdani',
    age : 23,
    print : function() {
        console.log(this.name + " " + this.age + " years old");    
    }
};



