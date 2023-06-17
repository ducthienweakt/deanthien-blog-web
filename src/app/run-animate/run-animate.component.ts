import { Component, Input } from '@angular/core';

@Component({
  selector: 'run-animate',
  templateUrl: './run-animate.component.html',
  styleUrls: ['./run-animate.component.scss']
})


export class RunAnimateComponent {
  @Input() name = "";
}
