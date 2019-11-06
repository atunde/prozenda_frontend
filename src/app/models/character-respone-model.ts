export class CharacterResponseModel {
    name: string;
    gender: Gender
}

export enum Gender {
    FEMALE = "female",
    MALE = "male",
    NA = "n/a"
}