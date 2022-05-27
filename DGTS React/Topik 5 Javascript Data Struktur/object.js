const car = {
    name: 'Ferrari',
    year: 2019,
    color: 'red',
    engine: {
        type: 'V8',
        capacity: '5.5',
        power: '500',
        torque: '500'
    },
    getName: function () {
        return this.name;
    }
};

console.log('====================================');
console.log(car.getName());
console.log('====================================');