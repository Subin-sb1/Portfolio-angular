import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [],
  template: `
 <div class="flex items-center my-5 ">
  <span class="mr-3  text-[#A6BBCC] text-[30px]">{{ value }}</span>
  <hr class="flex-grow border-2 border-[#A6BBCC] h-[2px] ">
</div>

  `,
  styles: ``
})
export class LineComponent {
 @Input() value: string = ''; 
}
