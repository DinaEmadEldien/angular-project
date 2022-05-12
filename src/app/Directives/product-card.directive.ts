import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {

  // private elemRef:ElementRef;
  
  constructor(private elemRef:ElementRef) {

    // this.elemRef=elemRef;


    elemRef.nativeElement.style.border="3px red solid";
    elemRef.nativeElement.style.borderRadius="25px";
    elemRef.nativeElement.style.boxShadow="5px 10px #888888";


  }
  @HostListener("mouseover") onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow="15px 20px #888888";
  }

  @HostListener("mouseout") onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow="5px 10px #888888";
  }

}
