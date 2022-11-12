const Employee = require('../lib/Employee');

test('Can create a new employee object', () => {
    const employee  = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Can set name in employee object', () => {
    const employee = new Employee("alex");
    expect(employee.name).toBe("alex");
});

test('Can set employee_id in employee object', () => {
    const employee = new Employee("alex", 13);
    expect(employee.employee_id).toBe(13);
});

test('Can set email in employee object', () => {
    const employee = new Employee("alex", 13, "alex@employer.com");
    expect(employee.email).toBe("alex@employer.com");
});

test('can get name from getname() method', () => {
    const employee = new Employee("Alex", 13, "alex@employer.com");
    expect(employee.getName()).toBe("Alex");
})