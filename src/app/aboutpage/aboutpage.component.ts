import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.sass']
})
export class AboutpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('aboutpage')
    this.scrollFunction()
  }


  private scrollFunction(): void {

    const appAbout = document.querySelector('app-aboutpage');
    const header = document.querySelector('header')
    let lastScrollTop = 0;

    appAbout.addEventListener("scroll", function(){ 
      var st = this.scrollTop;
      if (appAbout.scrollHeight - appAbout.scrollTop === appAbout.clientHeight){
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
