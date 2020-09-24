import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent implements OnInit {
  selectedTabIndex = 0;
  isBottom = false;
  setTabIndex(index) {
    this.selectedTabIndex = index;
    this.isBottom = false;
    document.getElementById('content').scrollIntoView();
  }
  position = window.scrollY;
  constructor(@Inject(DOCUMENT) document) { }
  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(this.selectedTabIndex == 0) {
        this.selectedTabIndex = 1;
        this.isBottom = true;
        setTimeout(()=> {
          document.getElementById('content').scrollIntoView();
        }, 100)
      }
    }
  }

}
