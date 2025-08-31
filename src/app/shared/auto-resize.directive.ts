import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "textarea[autoResize]",
})
export class AutoResizeDirective {
  constructor(private el: ElementRef<HTMLTextAreaElement>) {}

  @HostListener("input")
  onInput(): void {
    const textarea = this.el.nativeElement;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
  }

  ngAfterViewInit() {
    this.onInput(); // Initial resize
  }
}
