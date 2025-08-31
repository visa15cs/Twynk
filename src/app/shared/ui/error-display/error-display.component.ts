import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
@Component({
  selector:'app-error-display',
  templateUrl:'./error-display.component.html',
  styleUrls:['./error-display.component.scss']
})
export class ErrorDisplayComponent{
  @Input() control?: AbstractControl | null;
  @Input() fallback?: string;
  get message(): string | null{
    const c = this.control;
    if(!c || !c.errors) return null;
    if(c.errors['required']) return 'यह फ़ील्ड आवश्यक है';
    if(c.errors['minlength']) return `कम से कम ${c.errors['minlength'].requiredLength} अक्षर चाहिए`;
    if(c.errors['maxlength']) return `अधिकतम ${c.errors['maxlength'].requiredLength} अक्षर अनुमत`;
    if(c.errors['minLength']) return `कम से कम ${c.errors['minLength'].requiredLength} आइटम चाहिए`;
    return this.fallback || 'अमान्य मान';
  }
}
