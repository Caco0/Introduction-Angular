import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por cidade" />
        <button className="primary" type="button">Busca</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
