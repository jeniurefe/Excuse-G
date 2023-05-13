/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My birg"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", " the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my luch",
    "while I was playing"
  ];

  let whoIndex = 0;
  let actionIndex = 0;
  let whatIndex = 0;
  let whenIndex = 0;

  return who[whoIndex] + " " + action[actionIndex];
};
