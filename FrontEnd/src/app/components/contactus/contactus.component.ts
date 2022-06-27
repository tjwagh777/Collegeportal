import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/contactus.service';
import { Contactus } from 'src/app/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact:any;
  Contacts =new Contactus();
 
  constructor( private contcatservice:ContactusService) { }

  ngOnInit(): void {

    this.storeContact();
  }

  storeContact(data:any)
  {
    this.contcatservice.storeContact(this.Contacts).subscribe(res =>{
      this.storeContact();
    })
  };

}
