import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm/confirm-dialog.component';
export interface CanComponentDeactivate { canDeactivate: ()=> boolean | Promise<boolean>; }
@Injectable({providedIn:'root'})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate>{
  constructor(private dialog:MatDialog){}
  async canDeactivate(component: CanComponentDeactivate){
    if(component && typeof component.canDeactivate === 'function'){
      const result = component.canDeactivate();
      if(result === true) return true;
      // show confirm
      const ref = this.dialog.open(ConfirmDialogComponent,{data:{title:'बदलाव सहेजें?', message:'आपने कुछ बदला है — छोड़ना चाहते हैं?'}});
      const confirmed = await ref.afterClosed().toPromise();
      return !!confirmed;
    }
    return true;
  }
}
