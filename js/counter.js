/*create counter*/
let remove = document.createElement("button");
let remove_text = document.createTextNode("-");
remove.appendChild(remove_text);
document.getElementById("counter").appendChild(remove);
remove.classList.add("decrement");

let num = document.createElement("p");
let p_text = document.createTextNode("0");
num.appendChild(p_text);
document.getElementById("counter").appendChild(num);
num.classList.add("number");

let add = document.createElement("button");
let add_text = document.createTextNode("+");
add.appendChild(add_text);
document.getElementById("counter").appendChild(add);
add.classList.add("increment");

let sendbtn = document.createElement("button");
let sendbtn_text = document.createTextNode("Invia");
sendbtn.appendChild(sendbtn_text);
document.getElementById("counter").appendChild(sendbtn);
sendbtn.classList.add("sendbtn");

/*counter function*/
let int = 0;

add.addEventListener("click", function () {
  int += 1;
  num.innerHTML = int;
});

remove.addEventListener("click", function () {
  int -= 1;
  num.innerHTML = int;
});

sendbtn.addEventListener("click", function() {
  let contatore = 0;
  contatore = parseInt(num.innerHTML);
  if (contatore != 11) {
    alert("OPS, SEI MORTO!");
  } else {
    alert("PUOI ENTRARE!");
  }
  /*num.innerHTML = int;*/
})
