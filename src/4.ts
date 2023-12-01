abstract class House {
    protected door: boolean
    protected Key: object
    private tenants: Array<object>

    public comeIn(person: object) {
        if (this.door === true) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(Kkey: object): void
}

class MyHouse extends House {
    constructor(private Kkey: object) {
        super()
    }

    public openDoor(Kkey) {
        if (Key === Kkey) {
            this.door = true
        }
    }
}

class Key {
    signature: number
    constructor() {
        this.signature = Math.random()
    }

    getSignature() {
        return this.signature
    }
}

class Person {
    constructor(private key: object) {}
    getKey() {
        return this.key
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};