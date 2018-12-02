import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.sevice';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  rowData : any[]
  constructor(private memberService:MemberService){}  

  ngOnInit() {
    this.memberService.getMembers()
    .subscribe((data :any[]) => this.rowData = data)
  }
  columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Type', field: 'type'}
];

// rowData = [
//     {name: 'Toyota', email: 'a@x.com', type: 35000},
//     {name: 'Ford', email: 'a@v.com', type: 32000},
//     {name: 'Porsche', email: 'a@d.com', type: 72000}
// ];
}
