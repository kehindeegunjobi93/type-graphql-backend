import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field({ nullable: false })
    id: number;
    @Field({ nullable: false })
    firstname: string;
    @Field({ nullable: false })
    lastname: string;
    @Field({ nullable: false })
    age: number;
    @Field({ nullable: false })
    email:string;
    @Field({ nullable: false })
    confirmed:boolean;
}