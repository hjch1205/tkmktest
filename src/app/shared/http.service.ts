import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  private header: any = new Headers({ 'Content-Type': 'application/json' })

  constructor(private http: Http) { }

  get(data, url): any {
    // whirlShow();
    let newUrl = '';
    if (data) {
      for (let key in data) {
        newUrl += '&' + key + '=' + data[key]
      }
      newUrl = '?' + newUrl.substring(1);
    }
    return this.http.get(url + newUrl)
      .toPromise()
      .then(response => this.success(response.json()))
  }

  post(data, url): any {
    // whirlShow();
    return this.http.post(url, JSON.stringify(data), { headers: this.header })
      .toPromise()
      .then(response => this.success(response.json()))
  }

  // private success(resp: any): Promise<any> {
  //   // whirlRemove();
  //   if (resp.aaData) {
  //     return Promise.resolve(resp);
  //   } else if (resp.code) {
  //     if (resp.code === '000000') {
  //       return Promise.resolve(resp.data);
  //     } else {
  //       return Promise.reject(resp.msg);
  //     }
  //   } else {
  //     return Promise.reject('数据加载异常！');
  //   }
  // }

}
