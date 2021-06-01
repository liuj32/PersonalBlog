/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.record = new Map()
    this.record.set(1, big)
    this.record.set(2, medium)
    this.record.set(3, small)
  };
  
  /** 
   * @param {number} carType
   * @return {boolean}
   */
  ParkingSystem.prototype.addCar = function(carType) {
    if (this.record.get(carType) > 0) {
      var value = this.record.get(carType)
      value--
      this.record.set(carType, value)
      return true
    }
    return false
  };
  
  /**
   * Your ParkingSystem object will be instantiated and called as such:
   * var obj = new ParkingSystem(big, medium, small)
   * var param_1 = obj.addCar(carType)
   */