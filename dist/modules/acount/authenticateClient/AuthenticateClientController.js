"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _AuthenticateClientUseCase = require('./AuthenticateClientUseCase');

 class AuthenticateClientController {
    async handle(request, response) {

        const {username, password} = request.body;
        const authenticateClientUseCase = new (0, _AuthenticateClientUseCase.AuthenticateClientUseCase)()
        const result = await authenticateClientUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
} exports.AuthenticateClientController = AuthenticateClientController;