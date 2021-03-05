const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");
const db = require("./db");
const start = require("./controllers/controllerPrompt");

figlet("Welcome to Employee Tracker!", async (err, transformed) => {
  if (err) throw err;
  console.log(transformed);
  await start.startMenu();
});
