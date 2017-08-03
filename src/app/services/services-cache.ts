import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Constants } from '../constants/constants';

@Injectable()
export class ServiceCacheService {

  private sessionCache: any = {};

  constructor(private http: Http) { }

  clean() {
    sessionStorage.user = '';
    sessionStorage.menus = '';
    sessionStorage.dicts = '';
    sessionStorage.districts = '';
  }

  /**
   * 缓存用户信息
   */
  initUser(userData) {
    if (typeof userData != undefined && userData instanceof Object) {
      sessionStorage.user = JSON.stringify(userData);
    } else if (typeof userData != undefined) {
      sessionStorage.user = userData;
    }
  }

  /**
   * 缓存菜单信息
   */
  initMenus(menus) {
    if (typeof menus != undefined && menus instanceof Object) {
      sessionStorage.menus = JSON.stringify(menus);
    } else if (typeof menus != undefined) {
      sessionStorage.menus = menus;
    }
  }

  /**
   * 缓存数据字典
   */
  initDicts(dicts) {
    if (typeof dicts != undefined && dicts instanceof Object) {
      sessionStorage.dicts = JSON.stringify(dicts);
    } else if (typeof dicts != undefined) {
      sessionStorage.dicts = dicts;
    }
  }

  /**
   * 缓存行政区划信息
   */
  initDistricts(districts) {
    if (typeof districts != undefined && districts instanceof Object) {
      sessionStorage.districts = JSON.stringify(districts);
    } else if (typeof districts != undefined) {
      sessionStorage.districts = districts;
    }
  }

  /**
   *  获取用户名称
   */
  getUserName() {
    return JSON.parse(sessionStorage.user).userName;
  }

  /**
   * 获取角色名
   * @returns {*}
   */
  getRoleName() {
    return JSON.parse(sessionStorage.user).roleName;
  }

  /**
   *  获取一级菜单
   */
  getFirstMenus() {
    if (sessionStorage.menus) {
      return JSON.parse(sessionStorage.menus);
    } else {
      return '';
    }
  }

  /**
   *  获取二级菜单
   */
  getSecMenus(id) {
    var targetMenu = JSON.parse(sessionStorage.menus).filter(function (item) {
      return item.id == id;
    });
    if (targetMenu != null && targetMenu.length > 0) {
      return targetMenu[0].children;
    } else {
      return [];
    }
  }

  getGroupsByLookupName(lookupName) {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === lookupName);
    });
  }


  // 号牌号码
  getHpzlGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_WFSSP_HPZL);
    });
  }

  getHpzlValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_WFSSP_HPZL && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

  // 举报方式
  getUploadWayGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_UPLOADWAY);
    });
  }

  getUploadWayValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_UPLOADWAY && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

  // 审核状态
  getVerifyStatusGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_VERIFYSTATUS);
    });
  }

  getVerifyStatusValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_VERIFYSTATUS && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

  // 领奖方式
  getRewardWayGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_PAYMENT_TYPE);
    });
  }

  getRewardWayValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_PAYMENT_TYPE && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

  // 举报方式
  getInformTypeGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_INFORM_TYPE);
    });
  }

  getInformTypeValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_INFORM_TYPE && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }
  // 举报状态
  getInformStatusGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_INFORM_STATUS);
    });
  }

  getInformStatusValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_INFORM_STATUS && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }
   // 审核状态
  getHandleStatusGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_HANDLE_STATUS);
    });
  }

  getHandleStatusValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_HANDLE_STATUS && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }
    // 微信挪车-处置方法
  getHandleStyleGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_HANDLE_STYLE);
    });
  }

  getHandleStyleValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_HANDLE_STYLE && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

   // 微信用户订阅状态
  getSubscribeStatusGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_SUBSCRIBE_STATUS);
    });
  }

  getSubscribeStatusValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_SUBSCRIBE_STATUS && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }

  // 微信菜单click事件类型
  getWxMenuClickGroups() {
    return JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_WX_MENU_CLICK_KEY);
    });
  }

  getWxMenuClickValue(lookupKey) {
    var selectedItems = JSON.parse(sessionStorage.dicts).filter(function (item) {
      return (item.lookupName === Constants.DICT.LOOKUPNAME_WX_MENU_CLICK_KEY && item.lookupKey == lookupKey);
    });
    if (selectedItems.length > 0) {
      return selectedItems[0].lookupValue;
    }
    return null;
  }
}