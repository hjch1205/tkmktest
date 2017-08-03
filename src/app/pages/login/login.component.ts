import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ServiceCacheService } from '../services/services-cache';
// import { whirlRemove } from '../shared/whirl.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private loginmsgshow: boolean = false;
  private loginmsg: string = '';
  private logoUrl: any = null;
  private rewPaw: boolean = true;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionCache: ServiceCacheService,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      userName: [''],
      password: ['']
    });
  }

  ngOnInit() {
    this.logoUrl = require('../../assets/image/LOGO-10.png');
    let userName = this.getCookie('userName');

    if(userName == '') {
      this.rewPaw = false;
      let remPaw = document.querySelector('#rempassword');
      let renPawCheckbox = remPaw.querySelector('.fa');
      renPawCheckbox.classList.remove('fa-check-square');
      renPawCheckbox.classList.add('fa-square');
      this.loginForm.patchValue({
        userName: '',
        password: ''
      });
    } else {
      this.loginForm.patchValue({
        userName: userName,
        password: this.getCookie('password')
      });
    }

    document.onkeydown = (e) => {
      let loginForm = document.querySelector('#loginForm');
      let ev: any = e || window.event;
      if (ev.keyCode == 13 && loginForm) {
        this.login();
      }
    }
  }

  setCookie(name, value, expdays) {
    var expdate = new Date();
    //设置Cookie过期日期
    expdate.setDate(expdate.getDate() + expdays);
    //添加Cookie
    // document.cookie = name + "=" + escape(value) + ";expires=" + expdate.toUTCString();
  }

  getCookie(name) {
    //获取name在Cookie中起止位置
    var start = document.cookie.indexOf(name + "=");

    if (start != -1) {
      start = start + name.length + 1;
      //获取value的终止位置
      var end = document.cookie.indexOf(";", start);
      if (end == -1)
        end = document.cookie.length;
      //截获cookie的value值,并返回
      // return unescape(document.cookie.substring(start, end));
    }
    return "";
  }

  delCookie(name) {
    this.setCookie(name, "", -1);
  }

  login() {
    const _that = this;
    _that.loginService.login(_that.loginForm.value).then((resp) => {
      if (_that.rewPaw) {
        _that.setCookie('userName', _that.loginForm.value.userName, 7)
        _that.setCookie('password', _that.loginForm.value.password, 7)
      } else {
        _that.delCookie("userName");
      }
      _that.sessionCache.initUser(resp);
      if (resp.menuTreeNodeList != null && resp.menuTreeNodeList.length > 0) {
        _that.sessionCache.initMenus(resp.menuTreeNodeList);
        _that.loginService.reqList().then(function (arrayVo) {
          _that.sessionCache.initDicts(arrayVo);
        });
        _that.router.navigate(['/home']);
        // whirlRemove();
      }
    }, (msg) => {
      _that.loginmsgshow = true;
      _that.loginmsg = msg;
    })
  }

  toggleRemPaw() {
    let remPaw = document.querySelector('#rempassword');
    let renPawCheckbox = remPaw.querySelector('.fa');
    let renPawCheckboxClassName = renPawCheckbox.className;
    if (renPawCheckboxClassName == 'fa fa-check-square') {
      renPawCheckbox.classList.remove('fa-check-square');
      renPawCheckbox.classList.add('fa-square');
      this.rewPaw = false;
    } else {
      renPawCheckbox.classList.remove('fa-square');
      renPawCheckbox.classList.add('fa-check-square');
      this.rewPaw = true;
    }
    console.log(this.rewPaw);
  }
}
