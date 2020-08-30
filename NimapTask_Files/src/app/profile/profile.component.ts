import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profiledata : any;
  constructor(public use:UserService) { }

  ngOnInit(): void {
    this.use.selectData("userdata").subscribe(
      (res)=>{
        console.log(res)
        this.profiledata = res;
      }
    )
  }

}
