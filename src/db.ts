import { DataSource } from "typeorm";

import dotenv from 'dotenv';
import path =require("path")
import { User } from "./entities/User";
import { Cart } from "./entities/Cart";
import { Movies } from "./entities/Movies";
import { Projections } from "./entities/Projections";
import { Reviews } from "./entities/Reviews";
import { Tickets } from "./entities/Tickets";

dotenv.config()

dotenv.config({path: path.resolve(__dirname,'../.env')})

console.log("DB User:", process.env.DB_USER);
console.log("DB Password:", process.env.DB_PAASSWORD);
console.log("DB Host:", process.env.DB_HOST);
console.log("DB Name:", process.env.DB_NAME);
console.log("DB Port:", process.env.DB_PORT);

export const AppDataScource = new DataSource({
    type:'mysql',
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User,Cart,Movies,Projections,Reviews,Tickets],
    logging: false
    })