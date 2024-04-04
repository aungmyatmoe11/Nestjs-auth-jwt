import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    name: string,
    username: string,
    password: 'password'
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Test 1",
            username: "test1",
            password: 'password'
        },
        {
            id: 2,
            name: "Test 2",
            username: "test2",
            password: 'password'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username == username);
    }
}
