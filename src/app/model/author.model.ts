export class Author {
  name: string;
  surname: string;
  birthDate: Date;
  deathDate: Date;
  imageUrl: string;
  gender: Gender = Gender.MALE;

  constructor(name: string, surname: string,
              birthDate: Date, deathDate: Date,
              imageUrl: string,
              gender?: Gender = Gender.FEMALE) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.imageUrl = imageUrl;
    this.gender = gender;
  }
}

export enum Gender { MALE, FEMALE }
