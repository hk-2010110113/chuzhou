const formateTime = (num)=>{
    var date1 = new Date();
       //今天时间
       var time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
       var date2 = new Date(date1);
       date2.setDate(date1.getDate() + num);
       //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
       var time2 = date2.getFullYear() + "-" + double(date2.getMonth() + 1) + "-" + double(date2.getDate()); 
       return time2
 }

const double = (num)=>{
    if(Number(num)<=9){
        return '0'+num
    }
    return num
}

//获得年月日格式 yyyy-mm-dd
const getYearMonthDay =(startTime)=>{
    let selectedStartTime = '';
    selectedStartTime = startTime.getFullYear() +
    "-" +double(Number(startTime.getMonth()) + 1) +
    "-" +double(startTime.getDate())
    return selectedStartTime
}

export default {
    formateTime,
    getYearMonthDay
}

