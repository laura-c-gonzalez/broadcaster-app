import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({ selector: '[appPrev]' })

export class PrevDirective {

  constructor(private el: ElementRef) { console.log(this.el.nativeElement) }

  @HostListener('click')
  prevFunc() {

    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    //looking for slider-wrap > slider-main and want to slide on items only thus children and first position

    let item = elm.getElementsByClassName("item");

    elm.prepend(item[item.length - 1]);
    //to get the last item
  }
}
