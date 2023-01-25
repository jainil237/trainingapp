import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent {
  @Output() trainingStart = new EventEmitter<void>();
  Spinner=true;

  onStartTraining(){
    this.trainingStart.emit
  }
  stopSpinning(){
    setTimeout( () => this.Spinner = false, 2000 );
  }

}
