import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass']
})
export class MobileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mobileMenu()
  }

  private mobileMenu(): void {
    const mobileMenuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('app-mobile-menu');
    const appHome = document.querySelector('app-homepage');
    const mobileLinks = document.querySelectorAll('.mobile-menu-container nav a')

    mobileLinks.forEach(function(els){
      els.addEventListener('click', function(){
        mobileMenu.classList.remove('open')
        mobileMenuTrigger.classList.remove('close')
      })
    })

    mobileMenuTrigger.addEventListener('click', function() { 
      this.classList.toggle('close')
      appHome.classList.toggle('off')
      mobileMenu.classList.toggle('open')
    })
  }

}
