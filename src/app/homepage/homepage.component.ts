import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.remove('aboutpage')
    
    this.scrollFunction()
  }


  private scrollFunction(): void {

    const appHome = document.querySelector('app-homepage');
    const header = document.querySelector('header')
    let lastScrollTop = 0;

    appHome.addEventListener("scroll", function(){ 
      var st = this.scrollTop;
      if (appHome.scrollHeight - appHome.scrollTop === appHome.clientHeight){
        header.classList.add('hidden')
      }else {
        header.classList.remove('hidden')
      }
      if (st > window.innerHeight) {
        header.classList.add('inview')
      }else {
        header.classList.remove('inview')
      }
      if (st > lastScrollTop){
        header.classList.add('hidden')
      } else {
        header.classList.remove('hidden')
      }
      lastScrollTop = st <= 0 ? 0 : st; 
    }, false);
  }

}
