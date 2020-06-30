import { Directive } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective {

  constructor() {
    console.log('created test directive ')
  }

}
