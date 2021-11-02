import { ArgsType, Field } from "type-graphql";
import { MinLength } from "class-validator";


@ArgsType()
export class UserArgs {
    @Field()
   id: number;
   @Field()
   @MinLength(1)
   firstname: string;
}