window.onload = function () {
    getContacts()
}
// fetch a user and display them one at a time
let addressList = document.getElementById("container")

const getContacts = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => people = data.results)
        .then(people => {people.map((person, i) => {
            let html = `
            <h1 class="name">${person.name.first} ${person.name.last}</h1>
            <img src="${person.picture.large}"> 
            <div id="moreInfo">
                address, email, phone,
            </div>
            <button onclick="toggle(${i})">More Info/LessInfo</button>
            <div class="buttons" id="toggleDiv${i}">${person.location.street.number} ${person.location.street.name}
            ${person.email}
            ${person.phone}</div>
            `
            addressList.insertAdjacentHTML("afterbegin", html)
        })
  })
}

const toggle = (i) => {
    let x = document.getElementById(`toggleDiv${i}`);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  

