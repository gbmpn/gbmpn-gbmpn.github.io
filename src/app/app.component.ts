import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'mimo';

  constructor() { }

  ngOnInit(): void {
    this.mobileMenu()
  }

  mobileMenu(): void {
    const mobileMenuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('app-mobile-menu');
    const pageContainer = document.querySelector('.page-container');
    const mobileLinks = document.querySelectorAll('.mobile-menu-container nav a')
    
    mobileLinks.forEach(function(els){
      els.addEventListener('click', function(){
        mobileMenu.classList.remove('open')
        mobileMenuTrigger.classList.remove('close')
      })
    })

    mobileMenuTrigger.addEventListener('click', function() { 
      this.classList.toggle('close')
      pageContainer.classList.toggle('off')
      mobileMenu.classList.toggle('open')
    })
  }
}
