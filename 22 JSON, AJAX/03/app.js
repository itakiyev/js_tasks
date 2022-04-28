let contacts = {
  name: "Timothy",
  age: 35,
  address: {
    street: "1 Main St",
    city: "Montreal",
  },
  interests: ["cooking", "biking"],
};

// Мы можем получить доступ к нашим данным JSON через консоль, используя точечную нотацию, например:

/**
 * Функция JSON.stringify()преобразует объект JavaScript в строку JSON.
 * Строки легковесны и поэтому очень полезны при передаче данных от клиента к серверу.
 */

let string = JSON.stringify(contacts);
console.log(string);

/**
 * Чтобы сделать наоборот, мы используем JSON.parse()функцию
 */

let parsed = JSON.parse(string);

//parsed.name  // Timothy

/**
 * Цикл по массивам
 */

let users = [
  {
    name: "Timothy",
    age: 35,
  },
  {
    name: "Georgette",
    age: 29,
  },
  {
    name: "Craig",
    age: 54,
  },
];
let output = "";
for (var i = 0; i < users.length; i++) {
//   console.log(users[i].name);
  output += "<li>" + users[i].name + "</li>";
}
document.getElementById("users").innerHTML = output;
