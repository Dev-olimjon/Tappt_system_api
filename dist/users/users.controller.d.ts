import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    GetAll(): Promise<import("./madel/users.madel").UsersTable[]>;
    AddUser(User: UserDto): Promise<import("./madel/users.madel").UsersTable>;
    GetOne(idx: string): Promise<import("./madel/users.madel").UsersTable>;
    GetByNumber(number: number): Promise<import("./madel/users.madel").UsersTable>;
    Cabinet(): Promise<any>;
    UpdateUser(idx: string, NewUser: UserDto): Promise<[affectedCount: number]>;
    DeleteUser(idx: string): Promise<number>;
}
