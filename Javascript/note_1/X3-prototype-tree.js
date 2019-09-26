function Employee() {
  this.name = '';
  this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
