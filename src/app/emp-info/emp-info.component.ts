import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'
import { SchoolService } from '../school.service'

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService, SchoolService]
})
export class EmpInfoComponent implements OnInit {

  infoReceived1: any[]=[];

  infoReceived2: string[]=[];

  infoReceived3: string[]=[];

  infoSchools: string[] = [];

  getInfoFromService1(){

    this.infoReceived1 = this.rservice.getInfo1()

  }

  getInfoFromService2(){

    this.infoReceived2 = this.rservice.getInfo2()

  }

  getInfoFromService3(){

    this.infoReceived3 = this.rservice.getInfo3()

  }

  getAllSchools(){
    this.infoSchools = this.rschool.getAllSchools()
  }

  updateInfo(frm: any){
    this.rservice.addInfo(frm.value.location)
  }

constructor(private rservice: RecordsService, private rschool: SchoolService) { }
// constructor(private rschool: SchoolService) {}

  ngOnInit(): void { }

}
