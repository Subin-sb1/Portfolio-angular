import { RouterOutlet } from '@angular/router';
import { Component,AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID  } from '@angular/core';
import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { LineComponent } from '../line/line.component'; 
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterOutlet,
    NgCircleProgressModule,
    MatProgressBarModule,
    LineComponent,
    CardComponent
  ],
  providers: [
    {
      provide: CircleProgressOptions,
      useValue: {
        radius: 80,
        space: -2,
        outerStrokeGradient: true,
        outerStrokeWidth: 2,
        outerStrokeColor: "#9865CCFF",
        outerStrokeGradientStopColor: "#53a9ff",
        innerStrokeColor: "#e7e8ea",
        innerStrokeWidth: 2,
        titleColor : "#fff",
        subtitleColor :"#fff",
        animateTitle: false,
        animationDuration: 1000,
        showUnits: false,
        showBackground: false,
        clockwise: false,
        startFromZero: false,
        lazy: true
      },
    }
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  isBrowser: boolean = false;
  @ViewChild('myElement') myElement: ElementRef | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Your code that depends on the DOM can go here
      this.isBrowser = isPlatformBrowser(this.platformId);
      
    }
  }
}
