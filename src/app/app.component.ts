import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular';
  employees:any = [
    {
      "employeeId":  "b7839309-3348-463b-a7e3-5de1c168beb3",
      "firstName" : "Paul",
      "lastName" : "McCartney",
      "position" : "Developer I",
      "department" : "Engineering"
    },
    {
      "employeeId" : "62c1084e-6e34-4630-93fd-9153afb65309",
      "firstName" : "Pete",
      "lastName" : "Best",
      "position" : "Developer II",
      "department" : "Engineering"
    },
    {
      "employeeId" : "c0c2293d-16bd-4603-8e08-638a9d18b22c",
      "firstName" : "George",
      "lastName" : "Harrison",
      "position" : "Developer III",
      "department" : "Engineering"
    }
  ]
}
