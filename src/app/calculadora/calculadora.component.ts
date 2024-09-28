import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number =0;
  pressKey(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log(`Valor del input: ${inputValue}`);
    console.log(`Tecla presionada: ${event.key}`);
  }
  sum(){
    this.resultado = this.num1+this.num2;
  }
}

