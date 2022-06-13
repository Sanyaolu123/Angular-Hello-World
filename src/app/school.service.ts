import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  schools: string[] = ["Mafazat", 'Shoheed', "Abdul-Mumin"]

  getAllSchools():string[]{
    return this.schools
  }
  
}
