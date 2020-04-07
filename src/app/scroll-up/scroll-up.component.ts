import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.sass']
})
export class ScrollUpComponent implements OnInit {
  show:boolean;

  constructor() { }

  checkShow(){
    if (window.scrollY > 100){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  ngOnInit() {

    window.addEventListener('scroll', this.checkShow.bind(this))

  }

  scroll(){
    window.scroll({
      top: 0, 
      left: 0, 
      block: 'start', 
      behavior: 'smooth'
    });
  }





}
