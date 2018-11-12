import {Component, Input, OnInit} from '@angular/core';
import {Author} from '../model/author.model';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  ageDesc = AgeDesc; //referencia na enum pouzitelna v HTML

  @Input("data") author: Author = new Author("", "", new Date(), new Date(), "");
  imageWidth : number = 300;

  getAgeDescription(): AgeDesc {
    let difference = new Date().getFullYear() - this.author.birthDate.getFullYear();
    if(difference <= 30) return AgeDesc.YOUNG;
    if(difference <= 60) return AgeDesc.AUTHOR;
    if(difference <= 90) return AgeDesc.SKILLED;
    return null;
  }
}

export enum AgeDesc{ YOUNG, AUTHOR, SKILLED };
