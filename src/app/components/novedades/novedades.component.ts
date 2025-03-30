import { Component, OnInit } from '@angular/core';
import { ReleasesService } from '../../services/releases.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent implements OnInit {
  libros: any[] = [];

  isVideogameFilter: boolean = false;
  filtros = ['Libros', 'Peliculas', 'Series', 'Videojuegos'];
  plataformas = ['TODO', 'PS5', 'XBOX X|S', 'SWITCH', 'PC'];

  searchText: string = '';
  selectedPlatarforma = '';

  currentFilter: string = 'Libros';
  currentReleases: any[] = [];

  constructor(private releasesService: ReleasesService) { }

  ngOnInit(): void {
    this.updateReleases();
  }



  //TODO Cambiar filtro
  async toggleFilter(filtro: string) {
    if (filtro === 'Videojuegos') {
      this.isVideogameFilter = !this.isVideogameFilter;
    }
    this.currentFilter = filtro;
    this.currentFilter = filtro;
    this.selectedPlatarforma = '';
    await this.updateReleases();
  }

  //TODO Filtrar por plataforma
  filtrarPorPlataforma(plataforma: string) {
    console.log('Filtrando por plataforma:', plataforma);
  }

  // Buscar libros al escribir en el input
  buscar(event: any) {
    this.searchText = event.target.value;
    if (this.currentFilter === 'Libros' && this.searchText.trim()) {

    }
  }



  private async updateReleases() {
    try {
      this.currentReleases = await this.releasesService.getReleases(
        this.currentFilter,
        this.selectedPlatarforma
      );
    } catch (error) {
      console.error('Error updating releases:', error);
      // Manejar el error apropiadamente
    }
  }
}
