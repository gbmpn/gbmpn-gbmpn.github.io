import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const mobileMenuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('.app-mobile-menu');
    const appHome = document.querySelector('app-homepage');

    mobileMenuTrigger.addEventListener('click', function() { 
      this.classList.toggle('close')
      appHome.classList.toggle('off')
      mobileMenu.classList.toggle('open')
    })
  }

}
