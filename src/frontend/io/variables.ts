import Domain from "./domains.ts";

class Variable<T> {
    private value: T | null;
    private domain: T[];

    constructor(domain: T[]) {
        this.value = null;
        this.domain = domain;
    }

    setValue(value: T): void {
        if (this.domain.includes(value)) {
            this.value = value;
        }
    }

    unsetValue(): void {
        this.value = null;
    }

    toJSON(): object {
        return {
            value: this.value,
            domain: this.domain,
        };
    }

    static fromJSON<T>(data: { value: T | null; domain: T[] }): Variable<T> {
        const variable = new Variable(data.domain);
        variable.value = data.value;
        return variable;
    }
}

export default Variable;