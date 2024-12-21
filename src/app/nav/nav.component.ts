import { Component,OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navigation = [
    { name: 'Home', href: 'https://subinsb.netlify.app/', current: false },
    { name: 'Skills', href: '#', current: false },
    { name: 'Qualification', href: '#qul', current: false }
  ];
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    // Only access window in the browser (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

}
