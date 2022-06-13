import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() {
   }

  info1: string[]=["Abideen Sanyaolu","Es2016", "abideen.net"]

  info2: string[]=["Shawn Wilson",'E673','sw@abc.net']

  info3: string[]=["Mark Fisher",'E865','mf@abc.net']

  getInfo1():string[]{

    return this.info1

  }

  getInfo2():string[]{

    return this.info2

  }

  getInfo3():string[]{

    return this.info3

  }

  addInfo(info: any){
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);

    return this.info1
  }


}
