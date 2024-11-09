import { Component, Input, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-circle-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements AfterViewInit {
  @Input() skillName: string = '';
  @Input() percentage: number = 0;
  @ViewChild('progressCircle', { static: false }) progressCircle: ElementRef | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only execute this logic on the browser side
    if (isPlatformBrowser(this.platformId)) {
      if (this.progressCircle) {
        this.createObserver();
      }
    } else {
      // Inform during SSR that the IntersectionObserver won't work
      console.warn('IntersectionObserver is skipped during SSR (Server-Side Rendering)');
    }
  }

  createObserver(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCircle();
        }
      });
    }, options);

    if (this.progressCircle?.nativeElement) {
      observer.observe(this.progressCircle.nativeElement);
    }
  }

  animateCircle(): void {
    if (this.progressCircle) {
      const circle = this.progressCircle.nativeElement.querySelector('.circle-foreground');
      const radius = 50; // Assuming radius is 50
      const circumference = 2 * Math.PI * radius; // Circumference of the circle
      const strokeDashoffset = circumference - (this.percentage / 100) * circumference;

      // Apply the animation to the circle
      circle.style.transition = 'stroke-dashoffset 1s ease-out';
      circle.style.strokeDashoffset = strokeDashoffset.toString();
    }
  }
}
