import {AbstractControl} from "@angular/forms";

export class ValidarPass {

  static comprobarPass(AC: AbstractControl) {
  let pass = AC.get('pass').value;
  let confirmarpass = AC.get('confirmarpass').value;
  if(pass != confirmarpass) {
    AC.get('confirmarpass').setErrors( {MatchPassword: true} )
  } else {
    return null
  }
}
}