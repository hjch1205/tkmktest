let baseUrl = "http://uchoice.ronux.me/ncwx-api";

export const Constants = {
	 HttpUrl: {
    BASEURL: baseUrl,
    LOGIN: baseUrl + "/login",
    LOGOUT: baseUrl + "/logout",
    /*数据字典*/
    DICT: {
      LIST: baseUrl + "/dict/list",
      DETAIL: baseUrl + "/dict/detail",
      PAGINATION: baseUrl + "/dict/pagination",
      EDIT: baseUrl + "/dict/update",
      ADD: baseUrl + "/dict/insert",
      DELETE: baseUrl + "/dict/delete"
    }
    
   },
   
	 DICT: {
    LOOKUPNAME_WFSSP_HPZL: 'PLATE_TYPE', // 车牌种类
    LOOKUPNAME_UPLOADWAY: 'INFORM_TYPE', // 举报方式
    LOOKUPNAME_VERIFYSTATUS: 'WFSSP_VERIFY_STATUS',
    LOOKUPNAME_PAYMENT_TYPE: 'PAYMENT_TYPE',
    LOOKUPNAME_INFORM_TYPE: 'INFORM_TYPE',
    LOOKUPNAME_INFORM_STATUS: 'MOVE_CAR_INFORM_STATUS',
    LOOKUPNAME_HANDLE_STATUS: 'MOVE_CAR_VERIFY_STATUS',
    LOOKUPNAME_HANDLE_STYLE: 'MOVE_CAR_HANDLE_MEASURE',
    LOOKUPNAME_SUBSCRIBE_STATUS: 'SUBSCRIBE_STATUS', // 微信订阅状态
    LOOKUPNAME_WX_MENU_CLICK_KEY: 'WX_MENU_CLICK_KEY'
  }
}