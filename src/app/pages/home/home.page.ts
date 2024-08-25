import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'] // Fix styleUrls spelling
})
export class HomePage implements OnInit {
  newPickupCall() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialize any logic needed on component initialization
  }

  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

  navigateToPickupCall() {
    this.router.navigate(['pickup-call']);
  }

}
