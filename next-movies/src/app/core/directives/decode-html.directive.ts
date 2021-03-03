import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDecodeHtml]'
})
export class DecodeHtmlDirective {

  private elementRef: ElementRef;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  @Input() set appDecodeHtml(encodedHtml: string) {
    this.elementRef.nativeElement.innerHTML = encodedHtml;
  }
}
