import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SettingsArray } from './settings'
import { MOCK_SETTINGS } from './mock-settings';

// SettingService functions as a data interface for settings.

@Injectable()
export class SettingsService {

  private accessURL = 'api/settings';

  constructor (private http: Http) {}

  // Returns settings array via Promise
  getSettings(): Promise<SettingsArray> {
    return Promise.resolve(MOCK_SETTINGS);
  }

  getObservableSettings(): Observable<SettingsArray> {
    return this.http.get(this.accessURL)
      .map(this.extractData)
      .catch(this.extractError);
  }

  private extractData (res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private extractError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
