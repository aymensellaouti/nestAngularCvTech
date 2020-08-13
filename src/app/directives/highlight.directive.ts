import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bgc = 'green';
  constructor() { }
  @HostListener('mouseenter') onEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onLeave() {
    this.bgc = this.out;
  }
}
