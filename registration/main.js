document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  addPost();
});

function addPost() {
  const form = document.querySelector("form");

  let data = {
    login: form.querySelector("[name='login']").value,
    email: form.querySelector("[name='email']").value,
    password: form.querySelector("[name= 'password']").value,
  };

  fetch("	https://jsonplaceholder.org/users", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(console.log);
}
