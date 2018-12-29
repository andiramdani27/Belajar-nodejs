var myobj = {
    name : 'Andi Ramdani',
    age : 23,
    print : function() {
        console.log(this.name + " " + this.age + " years old");
        console.log(this == myobj);
    }
}

function myfunction() {
    console.log('i am my function');
    console.log(this == global);
}

myobj.print();
console.log('--------------');
myfunction();