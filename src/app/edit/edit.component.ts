
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = '';
  public show1:boolean = false;
  public buttonName1:any = '';
  constructor( private router:Router ) { }

  ngOnInit(): void {}
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "";
    else
      this.buttonName = "";
  }
  toggle1() {
    this.show1 = !this.show1;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show1)  
      this.buttonName = "";
    else
      this.buttonName = "";
  }
  
}
