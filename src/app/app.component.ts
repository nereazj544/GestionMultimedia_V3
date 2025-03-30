import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { CajaComponent } from "./components/caja/caja.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    HeaderComponent,
    // HomeComponent, 
    CommonModule,
    FooterComponent,
    // CdkDrag, 
    CajaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion';

}
