import {db} from "~/server/db";

export async function getUsers(){
    try {
        await db.query.Users.findMany()
    } catch (error) {
        console.log(error)
    }

}