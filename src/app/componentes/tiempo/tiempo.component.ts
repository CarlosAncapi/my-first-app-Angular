import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    
    //iniciando la contruccion del formulario
    this.formulario = this.fb.group({
      ciudad: ['Santiago'],
      codigo: ['CL']
    })

  }

  ngOnInit(): void {
  }
  

  consultar(){
    console.log("Formulario: ", this.formulario);
    
  }

}
