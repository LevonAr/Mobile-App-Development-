function Employee() {
  this.name = '';
  this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.constructor = Manager;
