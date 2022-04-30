document.addEventListener("DOMContentLoaded", function () {

    let url = "https://reqres.in/api/login";
    let inpLog = document.querySelector("#login")
    let inpPas = document.querySelector("#password")
    let btn = document.getElementById("btn");
    let xhr = new XMLHttpRequest(); // создаем объект XMLHttpRequest

    btn.onclick = function () {
        xhr.open("POST", url);
        let data = {
            username: inpLog.value,
            password: inpPas.value
        }
        let dataJSON = JSON.stringify(data);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(dataJSON);
    }

    xhr.onreadystatechange = function () {
        console.log(xhr.status);
        /**
         * Когда свойство readyState равно 4, а status равно 200, ответ готов
         */
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.response);
            console.log(obj);

            // for (let i = 0; i < obj.data.length; i++) {
            //     let div = document.createElement("div");
            //     let img = document.createElement("img");
            //     img.src = obj.data[i].avatar;
            //     div.append(img);
            //     let email = document.createElement("p");
            //     email.textContent = obj.data[i].email;
            //     div.append(email);
            //     let name = document.createElement("p");
            //     name.textContent = obj.data[i].first_name + " " + obj.data[i].last_name;
            //     div.append(name);
            //     container.append(div);
            // }
        }
    };
})