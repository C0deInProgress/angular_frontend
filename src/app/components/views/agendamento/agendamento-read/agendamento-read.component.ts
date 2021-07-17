import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})

export class AgendamentoReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'client_name', 'shedule', 'status'];

  ChangeColor(id:string){

    if($(id).hasClass('color-selected')){
      $(id).removeClass('color-selected');
      $(id).addClass('color-unselected');
    }else{
      $(id).removeClass('color-unselected');
      $(id).addClass('color-selected');
    }
  }

}
