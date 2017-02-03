import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  //noinspection JSUnusedGlobalSymbols
  @HostBinding('class.open') get opened() {
    //  We want to bind to a certain element on the HostListener which gets this directive
    //  the opened property.
    //  opened is readonly so we specify in the getter which value should be returned when
    //  someone tries to read this. We want to return opened.
    //  We are listening to 'class.open' which is a bootstrap css class.
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  //noinspection JSUnusedGlobalSymbols
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

}
