import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yourName: string;

  @ViewChild('name')
  private name: ElementRef;

  onSubmitClick() {
    this.yourName = this.name.nativeElement.value;
  }
}
