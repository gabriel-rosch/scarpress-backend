import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {username, password} = request.body;

        const createClientUseCase = new CreateUserUseCase();
        const result = await createClientUseCase.execute({password,username})

        return response.json(result);
    }
}