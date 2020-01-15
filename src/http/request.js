import API from "./api";
import Axios from "./axios";

const Serve = {
  // 产能监控页面的数据接口
  getTotalNum(params) {
    return Axios.postbyquery(API.getTotalNum, params);
  },
  GetLineProductionList(params) {
    return Axios.postbyquery(API.GetLineProductionList, params);
  },
  GetLineList() {
    return Axios.postbyquery(API.GetLineList, {});
  },
  GetDefectTopList(params) {
    return Axios.postbyquery(API.GetDefectTopList, params);
  },
  GetDefectNum(params) {
    return Axios.postbyquery(API.GetDefectNum, params);
  },
  GetDefectNumTopList(params) {
    return Axios.postbyquery(API.GetDefectNumTopList, params);
  },

  //报警监控页面的数据接口
  GetLineAlarmData(){
    return Axios.postbyquery(API.GetLineAlarmData);
  },
  GetViewerState(){
    return Axios.postbyquery(API.GetViewerState);
  },
  GetGetAlarmEQInfo(){
    return Axios.postbyquery(API.GetGetAlarmEQInfo);
  },

  // 软件版本监控页面
  // 获取下拉框的数据
  GetSoftWareListWithTrueVersion(){
    return Axios.postbyquery(API.GetSoftWareListWithTrueVersion);
  },

  GetLinePcSoftwareList(params){
    return Axios.postbyquery(API.GetLinePcSoftwareList,params);
  },

  GetVersionChangeRecord(params){
    return Axios.postbyquery(API.GetVersionChangeRecord,params);
  }
};

export default Serve;
