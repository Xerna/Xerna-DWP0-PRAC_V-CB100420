import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-padree-hijo',
  templateUrl: './padree-hijo.component.html',
  styleUrls: ['./padree-hijo.component.css']
})
export class PadreeHijoComponent {
  @Input() tituloARecibir: string = ''; // Recibe el valor del padre
}
