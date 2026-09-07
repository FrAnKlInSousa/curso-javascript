function test(){
    var a = 3;
    var b = 8;

    var aux = a;
    a = b;
    b = aux;

    console.log('a is ' + a);
    console.log('b is ' + b);

}

test();