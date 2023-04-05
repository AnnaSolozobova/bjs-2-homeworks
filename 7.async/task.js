class  AlarmClock {

    constructor(alarmCollection, intervalId) { 
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) { 
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
          }
        if (this.alarmCollection.includes((alarmSignal) => alarmSignal.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        else {
        this.alarmCollection.push({callback, time, canCall: true})
        }
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((alarmSignal) => alarmSignal.time !== time);
    }
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }
    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(alarmSignal => {
            if(alarmSignal.time === this.getCurrentFormattedTime()) {
                alarmSignal.canCall = false;
                alarmSignal.callback();
            }
        }), 1000)
           
           
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarmSignal => alarmSignal.canCall = true);
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}
    