import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mobileMenu()
    this.scrollFunction()
  }

  mobileMenu(): void {
    const mobileMenuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('app-mobile-menu');
    const appHome = document.querySelector('app-homepage');

    mobileMenuTrigger.addEventListener('click', function() { 
      this.classList.toggle('close')
      appHome.classList.toggle('off')
      mobileMenu.classList.toggle('open')
    })
  }

  scrollFunction(): void {

    const appHome = document.querySelector('app-homepage');
    const header = document.querySelector('header')
    let lastScrollTop = 0;

    appHome.addEventListener("scroll", function(){ 
      var st = this.scrollTop;
      console.log(st, window.innerHeight)
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
