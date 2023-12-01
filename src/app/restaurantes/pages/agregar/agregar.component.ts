import { Component, OnInit } from '@angular/core';
import { Restaurantes } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  restaurante: Restaurantes = {
    nombre: '',
    id: '',
    descripcion: '',
    imagen: '',
    telefono: '',
    direccion: '',
    email: '',
    web: '',
    capacidad: '',
    lat: '',
    lon: '',
    url: '',
    alt_img: ''
  }
  constructor(private restaurantesService: RestaurantesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }
  ngOnInit(): void {

    console.log(this.router.url.includes('editar'));
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.restaurantesService.getRestaurantesPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe(rest => this.restaurante = rest);     // FUNCIONA

  }

  guardar() {
    if (this.restaurante.nombre.trim().length === 0) { return; }
    if (this.restaurante.id) {
      this.restaurantesService.actualizarRestaurante(this.restaurante)
        .subscribe(rest => {
          console.log('Actualizando', rest);
          this.restaurante = rest;
          this.mostrarSnackBar("")
        })
    } else {
      this.restaurantesService.agregarRestaurante(this.restaurante)
        .subscribe(rest => {
          console.log('Agregando', rest);
          this.router.navigate(['/restaurantes/editar', rest.id])
        })
    }


  }

  borrarRestaurante() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.restaurante
    });

    dialog.afterClosed().subscribe(
      (result) => {
        console.log(result); //true o undefined
        if (result) {
          this.restaurantesService.borrarRestaurante(this.restaurante.id!)
            .subscribe(resp => {
              this.mostrarSnackBar('Registro borrado');
              this.router.navigate(['/restaurantes']);
            })
        }
      }
    )

  }

  mostrarSnackBar(mensaje: string): void {
    //recibe un string y no regresa nada
    this.snackBar.open(mensaje, 'Cerrar', { duration: 2500 });
  }


}
