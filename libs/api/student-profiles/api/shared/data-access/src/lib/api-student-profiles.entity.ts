import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiStudentProfilesEntity{
  @Field()
<<<<<<< HEAD
  studentNum: string
||||||| 0fcdbe12
  studentNum: string;
=======
  dbId: string;

  @Field()
  studentNum: string;
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
<<<<<<< HEAD
  email: string;
||||||| 0fcdbe12
  title: string;

  @Field()
  email: string;
=======
  title: string;

  @Field((type) => [String])
  email: string[];
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

  @Field((type) => [String])
  phoneNum: string[];

  @Field()
  dateOfBirth: string;

<<<<<<< HEAD
  @Field(type => [Int])
  marks: number[];
||||||| 569687cf
  @Field()
  nameOfDegree: string;

  @Field()
  bio: string;

  @Field((type) => [String])
  tags: string[];

  @Field()
  preferredLocation: string;

  @Field()
  employmentStatus: string;

  @Field((type) => [String])
  notableAchievements: string[];

  @Field((type) => [String])
  links: string[];

  //uploaded documents return if they are uploaded or not
  @Field()
  academicRecord: boolean;

  @Field()
  cv: boolean;

  @Field()
  capstoneProject: boolean;
=======
  @Field()
  nameOfDegree: string;

  @Field()
  bio: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  tags?: string[];

  @Field()
  preferredLocation: string;

  @Field()
  employmentStatus: string;

  @Field((type) => [String])
  notableAchievements: string[];

  @Field((type) => [[String]], { nullable: 'itemsAndList' })
  links?: string[][];

  @Field()
  profilePhoto: string;

  //uploaded documents return if they are uploaded or not
  @Field()
  academicRecord: boolean;

  @Field()
  cv: boolean;

  @Field()
  capstoneProject: boolean;
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
}
