let users = document.querySelector(".users");

weather = async () => {
  const response = await fetch(
    `https://615dabf512571a00172077f1.mockapi.io/api/v1/edo`
  );
  const myJson = await response.json();
  console.log(myJson);
  myJson.map((e) => {
    console.log("e444", e);
    let newUser = document.createElement("li");
    newUser.innerText = e.firstname;
    users.append(newUser);
  });
  //   users.innerHTML = myJson.results;
};
weather();
