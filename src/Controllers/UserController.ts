import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { UserModel } from "../Models/UserModel";

@JsonController()
export class UserController {

    @Get("/users")
    getAll() {
       return { message: "This action returns all users" };
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
       return { message: "This action returns user #" + id };
    }

    @Post("/users")
    post(@Body() user: UserModel ) {
       console.log( user );
       return { message: "Saving user..." + user.name };
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
       return { message: "Updating a user..." + id };
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
       return { message: "Removing user..." + id };
    }

}