#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//makinkg classes for player n opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//ask for player name & opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Entre Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assasin", "Zombie"]
});
//gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Healthy Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    //assasin
    if (opponent.select == "Assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Healthy Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is = ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is = ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is = ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Healthy Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You loose, Better Luck Next Time!"));
            process.exit();
        }
    }
} while (true);
