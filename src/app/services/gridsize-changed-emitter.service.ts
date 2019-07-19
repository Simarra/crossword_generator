
import {Injectable, EventEmitter} from '@angular/core';
// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class GridRowColChangeService {
  gridSizeChanged = new EventEmitter();
}
;
@Injectable({providedIn:'root'})
export class GridSizeChangeService {
  gridSizeChanged = new EventEmitter();
}