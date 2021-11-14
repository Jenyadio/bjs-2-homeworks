class AlarmClock {

    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    addClock(time, func, id) {
      if (id === undefined) {
        throw new Error("Ошибка: нет параметра id");
      } 
      
      let findIndex = this.alarmCollection.findIndex(alarm => alarm.id === id);
      if (findIndex === -1) {
          this.alarmCollection.push({time : time, callback : func, id : id});
        } else {
          console.error("Такой id уже есть");
        }
    }
  
    removeClock(id) {
      let index = this.alarmCollection.findIndex(alarm => alarm.id === id);
      if (index > -1) {
        this.alarmCollection.splice(index, 1);
        return true; 
      } else {
        return false;
      }
    }
  
    getCurrentFormattedTime() {
      let time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      if (hours < 10) { hours = "0" + hours;}
      if (minutes < 10) { minutes = "0" + minutes;}
      return `${hours}:${minutes}`;
    }
  
    start() {
      let checkClock = alarm => {
        if (this.getCurrentFormattedTime() === alarm.time) {
          alarm.callback();
        }
      }

      if (this.timerId === null) {
        this.timerId = setInterval(this.alarmCollection.forEach((alarm) => checkClock(alarm)), 2000);
      }
      return;
    }
  
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
      }
      this.timerId = null;
    }
  
    printAlarms() {
      this.alarmCollection.forEach((item) => console.log(`Будильник установлен на ${item.time} id ${item.id}`));
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection.length = 0;
    }
  }
  
  
 
    let alarm = new AlarmClock();
  
    alarm.addClock("09:00", () => console.log("Пора вставать"), 1);
    alarm.addClock("09:01", () => { console.log("Давай, вставай уже!"); alarm.removeClock(2)}, 2);
    alarm.addClock("09:02", () => {
      console.log("Вставай, а то проспишь!"); 
      alarm.clearAlarms();
      alarm.printAlarms();
      }, 3);
    alarm.start();
    alarm.stop();
    alarm.printAlarms();
  