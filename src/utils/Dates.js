import moment from 'moment'
import momentZ from 'moment-timezone'

export default class Dates {

  static _todayDate = moment();
  static _thisYear = +moment().format().split('T')[0].split('-')[0];

  static get year(){
    return this._thisYear;
  }

  static get today(){
    return this._todayDate;
  }

  static get tomorrow(){
    return this.addDays(1);
  }


  static get oneWeeksFromNow(){
    return this.addDays(7);
  }

  static get twoWeeksFromNow(){
    return this.addDays(14);
  }

  static get twoMonthsFromNow(){
    return this.addDays(58);
  }

  static get oneMonthFromNow(){
    return this.addDays(30);
  }

  static get previousWeek(){
    return this.subtractDays(7);
  }

  static get threeMonthsAgo(){
    return this.subtractDays(93);
  }


  static addDays(days, date=this._todayDate){
    return this.add({
      date,
      timeFrame: 'days',
      time: days,
    });
  }

  static subtractDays(days, date=this._todayDate){
    return this.subtract({
      date,
      timeFrame: 'days',
      time: days,
    });
  }

  static addMonths(months, date=this._todayDate){
    return this.add({
      date,
      timeFrame: 'months',
      time: months,
    });
  }

  static add({date, timeFrame, time}){
    return moment(date).add(time, timeFrame);
  }

  static subtract({date, timeFrame, time}){
    return moment(date).subtract(time, timeFrame);
  }

  static formatDate(date, toFormat='MM/DD/YYYY', fromFormat=null){
    return moment(date, fromFormat).format(toFormat)
  }

  static getForTimeZone(date, timezone, hour, min){
    // format like : 2013-06-01T00:00:00
    const dateWithTime = `${date}T${hour}:${min}:00`;
    return momentZ.tz(dateWithTime, timezone)
  }

  static stripTimeString(date) {
    return date.split('T')[0].replace(/-/g, '/')
  }

}
