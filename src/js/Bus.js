class Bus {
  constructor(direction, seats, passengers) {
    this.direction = direction;
    this.stations = ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"];
    this.seats = seats;
    this.passengers = passengers;
    this.last_station = 0;
  }

  current() {
    return this.stations[this.last_station];
  }

  next() {
    if (this.direction === 0) {
      if (this.last_station !== this.stations.length - 1) {
        this.last_station++;
      }
    } else {
      last_station += this.stations.length - 1;
      if (this.last_station !== 0) {
        this.last_station--;
      }
    }
  }

  board(count) {
    this.passengers += count;
    if (this.seats < this.passengers) {
      this.passengers = this.seats;
    }
  }

  deboard(count) {
    this.passangers -= count;
    if (this.passengers < 0) {
      this.passengers = 0;
    }
  }
}
