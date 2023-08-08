import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
   frameWorkName : string ='javascript'
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(eve : Event){
  console.log(eve.target)
  let target =eve.target as HTMLAnchorElement;
  let val :string = target.getAttribute("data-id")!;
  console.log(val)
  this.frameWorkName=val;
  }
}

