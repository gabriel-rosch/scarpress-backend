"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateUserUseCase = require('./CreateUserUseCase');

 class CreateUserController {
    async handle(request, response) {
        const {username, password} = request.body;

        const createClientUseCase = new (0, _CreateUserUseCase.CreateUserUseCase)();
        const result = await createClientUseCase.execute({password,username})

        return response.json(result);
    }
} exports.CreateUserController = CreateUserController;