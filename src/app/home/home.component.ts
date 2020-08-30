import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public record : any;
  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, private use:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname:['', [Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
      lname:['', [Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
      mail:['', [Validators.required, Validators.email]],
      mobile:['', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]],
      address:['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]]
    });

    this.use.selectData("userdata").subscribe(
      (res)=>{
        // console.log(res);
        this.record = res;
      },
      (error)=>{

      }
    )
  }

  filter_data(addobj){
    // addobj.preventDefault();
    console.log(addobj)
    console.log(addobj.value)
    this.use.postData("userdata",addobj.value).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{

      }
    )
  }

  registerData(regObject){
    console.log(regObject.value)
 
  }

  clsbtn(){}
  onregbtn(){}
  

}
