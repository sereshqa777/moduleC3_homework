class ElectricalAppliance {
    constructor(type, model, power) {
        this.type = type;
        this.model = model;
        this.power = power;
        this.isOffOn = false;
    }

    on() {
        console.log(`The ${this.type} ${this.model} is on`);
        this.isOffOn = true;
    }

    off() {
        console.log(`The ${this.type} ${this.model} is off`);
        this.isOffOn = false;
    }

    totalPower() {
        if (this.isOffOn) return this.power;
        else return 0;
    }
}

const grill = new ElectricalAppliance('Grill', 'Tefal', 1400);
const blender = new ElectricalAppliance('Blender', 'Bork', 1125);
const kettle = new ElectricalAppliance('Kettle', 'Redmond', 1800);

grill.on();
blender.off();
kettle.on();

console.log(`Total power = ${grill.totalPower() + blender.totalPower() + kettle.totalPower()} watt`);
