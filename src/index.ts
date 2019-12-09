import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Board } from "./entity/Board";
import { SubBoard } from "./entity/SubBoard";
import path = require('path');


createConnection().then(async connection => {
    /**
     * Boiler plate
     */
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

    var express = require('express');
    var app = express();
    app.use(express.json());
    app.get('/', function(req, res) {
        res.sendFile(path.resolve(__dirname, './views/index.html'))
    });
    app.post('/newboard', async function(req, res) {
        const {
            boardTitle,
            firstName,
            lastName,
            subBoards,
            age
        } = req.body;

        const newUser = new User();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.age = age;
        await connection.manager.save(newUser);
        console.log('user created');

        const newBoard = new Board();
        newBoard.title = boardTitle;
        newBoard.subboards = [];
        await connection.manager.save(newBoard);
        console.log('created new board');

        subBoards.forEach(async (name) => {
            const tempSubboard = new SubBoard();
            tempSubboard.title = name;
            newBoard.subboards.push(tempSubboard);
            await connection.manager.save(tempSubboard);
            await connection.manager.save(newBoard);
        });

        res.json({
            message: 'done'
        })
    });
    app.listen(3000, () => console.log('http://localhost:3000'))




}).catch(error => console.log(error));
