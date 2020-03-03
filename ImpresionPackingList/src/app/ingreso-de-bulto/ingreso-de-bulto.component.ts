import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-de-bulto',
  templateUrl: './ingreso-de-bulto.component.html',
  styleUrls: ['./ingreso-de-bulto.component.scss']
})
export class IngresoDeBultoComponent implements OnInit {
// tslint:disable-next-line: align
datos: any = {};
  constructor(private formBuilder: FormBuilder,)
  {
    this.datos = formBuilder.group({
      dropId: new FormControl('', {validators: Validators.required, updateOn: 'blur'})
  }, {updateOn: 'change'});

    this.datos.valueChanges.subscribe(datos => { });
    this.datos.get('dropId').valueChanges.subscribe((bulto) => {
  });
  }

  ngOnInit(): void {
  }


 enviarValor() {
    alert(this.datos.get('dropId').value);
}

}
