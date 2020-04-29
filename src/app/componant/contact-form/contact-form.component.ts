import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin':'*',
  //   })
  // };

  contactForm: FormGroup;
  constructor(private formBuild: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
    this.contactForm = this.formBuild.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
        ),
      ]),
      contactNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*"),
      ]),
      remarks: new FormControl(""),
    });
  }
  s;
  get formControls() {
    return this.contactForm.controls;
  }

  submit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm);
      const formData = this.contactForm.value;
      const submitForm = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        remarks: formData.remarks,
      };

      this.createChild(submitForm).subscribe((res: any) => {
        alert("hi");
      });
    }
  }
    
    

  createChild(details) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', });
  let options = { headers: headers };
    return this.http.post('http://localhost:8000/api/contacts', details, options);


  }
}