import {prisma} from "../../database/prismaClient";

interface ICreateClient {
    id: string;
    name: string;
    cnpj: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    complement: string; //Marca/fabricante
    email: string;
}

export class CreateClientUseCase {
    async execute(data: ICreateClient) {
        const clientExist = await prisma.client.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: "insensitive"
                }
            }
        })
        if(clientExist) {
            throw new Error("Nome já cadastrado!")
        }
       
        const client = await prisma.client.create({
            data
        })
      
        return client;
    }
}