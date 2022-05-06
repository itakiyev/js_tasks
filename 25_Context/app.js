function hello() {
    console.log('hello', this)
}

// hello();

let person = {
    name: 'Issa',
    age: 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
}