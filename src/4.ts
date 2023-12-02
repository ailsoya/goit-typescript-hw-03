abstract class House {
    protected door: boolean = false
    private tenants: Array<Person> = []

    constructor(protected Key: Key) {
        this.Key = Key
    }

    public comeIn(person: Person): void {
        if (this.door === true) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: number): void
}

class MyHouse extends House {
    public openDoor(key) {
        if (this.Key.getSignature === key) {
            this.door = true
        }
    }
}

class Key {
    signature: number = Math.random()

    getSignature(): number {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) {}
    getKey(): Key {
        return this.key
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};