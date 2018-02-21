import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //Atributo que controla o aspecto visual da barra de progresso 
  public progresso: number = 25

  constructor() { }

  ngOnInit() {
  }

}
