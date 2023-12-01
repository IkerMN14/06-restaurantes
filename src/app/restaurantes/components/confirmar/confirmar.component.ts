import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Restaurantes } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit{
  ngOnInit(): void {
  
  }
  
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Restaurantes) { }

  borrar(){
    this.dialogRef.close(true); //si quiere borrarlo
  }
  cerrar(){
    this.dialogRef.close();
  }


}
