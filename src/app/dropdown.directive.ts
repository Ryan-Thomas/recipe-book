import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  @HostBinding('class.open') get opened() {
    //  We want to bind to a certain element on the HostListener which gets this directive
    //  the opened property.
    //  opened is readonly so we specify in the getter which value should be returned when
    //  someone tries to read this. We want to return opened.
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

}
