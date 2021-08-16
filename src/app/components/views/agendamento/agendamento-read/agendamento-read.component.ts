import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})

export class AgendamentoReadComponent implements OnInit {

  agendamento: Agendamento = {
    client_name: "",
    shedule: "",
    status: true
  }

  constructor(private service: AgendamentoService) { }

  ngOnInit(): void {
  }


  create(): void{
    this.service.create(this.agendamento).subscribe((resposta) =>{
      console.log(resposta)
    })

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
