import {Injectable, EventEmitter} from '@angular/core';
// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class WordService {
  transmitLen = new EventEmitter();
  transmitWords = new EventEmitter();
  transmitDescrs = new EventEmitter();
}