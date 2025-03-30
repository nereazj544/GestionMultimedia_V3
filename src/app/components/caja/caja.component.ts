import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [CommonModule, DragDropModule, RouterModule],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {
  isCajaPage = false;  // Cambiado a false inicialmente
  
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.isCajaPage = event.url === '/docs';
      }
    })
  }

  onBoxClick(): void {
    console.log("Click en la caja");
  }
}