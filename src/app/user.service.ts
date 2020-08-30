import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public obj_subject_share = new Subject();
  public url = "http://localhost:3000/";
  constructor(public http:HttpClient) { }

  selectData(jsonServerKey){
    var finalpath = this.url+jsonServerKey;
      return this.http.get(finalpath);
  }

  shareRecords(record_from_add){
    // console.log("In Service")
    // console.log(record_from_add)
    // console.log(this.obj_subject_share);
    this.obj_subject_share.next(record_from_add);
  }
   
  postData(jsonServerKey, obj){
    //console.log(jsonServerKey,obj)
    var finalpath = this.url+jsonServerKey;
    return this.http.post(finalpath,obj)
  }

  storedata(mykey,myvalue){
    localStorage.setItem(mykey,myvalue);
  }

  getData(mykey){
    return localStorage.getItem(mykey)
  }


}




