import { User } from "../entities/User";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { UserArgs } from "../types";


const users: User[] = [
    {
        id: 1,
        firstname: "Jane",
        lastname: "Doe",
        age: 30,
        email: "jan@doe.com",
        confirmed: true
    } as User,
    {
        id: 2,
        firstname: "John",
        lastname: "Doe",
        age: 33,
        email: "jan@doe.com",
        confirmed: false
    } as User,
    {
        id: 3,
        firstname: "Alex",
        lastname: "Doe",
        age: 31,
        email: "jan@doe.com",
        confirmed: true
    } as User,
]

@Resolver(() => User)
export class UserResolver{
    @Query(() => [User], {nullable: true})
  async users(): Promise<User[] | null> {
      return users
  }

  @Query(() => User, {nullable: true})
  async user(
     @Args() data: UserArgs
  ): Promise<User | null | undefined> {
      const user =users.find((user) => user.id === data.id);
      if(data.firstname === user?.firstname) return user;
      else return null;
  }

  @Mutation(() => User)
  async addUser(
      @Arg("firstname") firstname: string,
      @Arg("lastname") lastname: string,
      @Arg("email") email: string,
      @Arg("age") age: number,
      @Arg("confirmed") confirmed: boolean
  ): Promise<User>{
      const newUser: User = {
          id: Math.random(),
          age,
          confirmed,
          email,
          firstname,
          lastname
      }
      users.push(newUser)
      return newUser;
  }
}