import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por cidade" />
        <button className="primary" type="button">Busca</button>
      </form>
    </section>
    <section>
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorial/faa';
  housinglocations: Housinglocation = {
    id: 999,
    name: 'Rafael Dametto',
    city: 'Limeira',
    state: 'SP',
    photo: `${this.baseUrl}/house-1.jpg`,
    availableUnits: 522,
    wifi: true,
    laundry: true,
  };
}
