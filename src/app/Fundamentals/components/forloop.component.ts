import { Component } from '@angular/core';

@Component({
  selector: 'my-forloop',
  template: `
    <div>
      <p *ngFor="let data of datas; let i = index"> Index No : {{ i }} --- My Name is : "{{ data.Name }}" ---- my Id is : "{{ data.Id }}" </p>
    </div>
  `,
  styles: []
})
export class ForloopComponent {

  datas: Array<any> = [
    { Id: 1, Name: 'Siva' },
    { Id: 2, Name: 'Ram' },
    { Id: 1, Name: 'Sunnapu' }
  ]

}
