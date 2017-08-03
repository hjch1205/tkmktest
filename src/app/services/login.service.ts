import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { HttpService } from '../shared/http.service';
import { Constants } from '../constants/constants';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService) { }

  login(data): any {
    return this.httpService.post(data, Constants.HttpUrl.LOGIN)
  }

  reqList(): any {
    return this.httpService.get({}, Constants.HttpUrl.DICT.LIST)
  }
}