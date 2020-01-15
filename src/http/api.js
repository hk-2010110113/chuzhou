const API = "http://192.168.12.156:8089";
export default {
  // hostListItem: name => `${API}/zhihu/hot-lists/${name}`,

  // 获得产能统计页面的统计数据
  getTotalNum:`${API}/api/BigData/GetTotalNum`,
  // 线别产能列表数据
  GetLineProductionList:`${API}/api/BigData/GetLineProductionList`,
  // 获得所有线体
  GetLineList:`${API}/api/BigData/GetLineList`,
  // 获得缺陷排行top10数据
  GetDefectTopList:`${API}/api/BigData/GetDefectTopList`,
  // 获得缺陷统计
  GetDefectNum:`${API}/api/BigData/GetDefectNum`,
  // 最多和最少缺陷
  GetDefectNumTopList:`${API}/api/BigData/GetDefectNumTopList`,

  //报警监控页面数据
  //获得整点报警数据接口
  GetLineAlarmData:`${API}/api/BigData/GetLineAlarmData`,

  GetViewerState:`${API}/api/BigData/GetViewerState`,
  // 获取EQ频发报警数据接口
  GetGetAlarmEQInfo:`${API}/api/BigData/GetGetAlarmEQInfo`,

  //软件版本监控页面
  GetSoftWareListWithTrueVersion:`${API}/api/BigData/GetSoftWareListWithTrueVersion`,

  GetLinePcSoftwareList:`${API}/api/BigData/GetLinePcSoftwareList`,

  GetVersionChangeRecord:`${API}/api/BigData/GetVersionChangeRecord`
   
};
