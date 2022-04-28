document.addEventListener("DOMContentLoaded", function () {
//   let str = '{"data": [1, 2, 3, 4],"id": "id01"}'

//   let temp = JSON.parse(str, function(key, value){
//       if (key == "data")
//           return undefined
//       else
//           return value;
//   });
//   console.log(str);
//   let obj = {
//       name: 'Ruslan',
//       age: 29,
//       say: function(){alert("hello")},
//       // toJSON: function(){
//       //     return "zxcvb"
//       // }
//       parent: window
//   }
//   let temp = JSON.stringify(obj, function(key, value){
//       if (key == "age") return ++value;
//       return value;
//   });
//   console.log(temp);

//   let temp = JSON.stringify(obj, ["name", "age"]);
//   console.log(temp);

  let url = "https://reqres.in/api/users?page=2";
  let btn = document.getElementById("btn");
  let xhr = new XMLHttpRequest(); // создаем объект XMLHttpRequest

  btn.onclick = function () {
    xhr.open("GET", url);
    xhr.send();
  };
  let container = document.getElementById("container");
  /**
   * Свойство onreadystatechange указывает функцию, которая будет
   * выполняться каждый раз при изменении состояния объекта XMLHttpRequest
   */
  xhr.onreadystatechange = function () {
    console.log(xhr.status);
    /**
     * Когда свойство readyState равно 4, а status равно 200, ответ готов
     */
    if (xhr.readyState == 4 && xhr.status == 200) {
      let obj = JSON.parse(xhr.response);
      console.log(obj);

      for (let i = 0; i < obj.data.length; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = obj.data[i].avatar;
        div.append(img);
        let email = document.createElement("p");
        email.textContent = obj.data[i].email;
        div.append(email);
        let name = document.createElement("p");
        name.textContent = obj.data[i].first_name + " " + obj.data[i].last_name;
        div.append(name);
        container.append(div);
      }
    }
  };
//   xhr.open("GET", url);
//   xhr.send();
});
