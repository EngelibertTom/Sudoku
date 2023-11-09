class Domain<T> {

    private domain :  Array<T>

    constructor() {
        this.domain = [];
    }

    private removeValue(value:T) {
        if(this.domain.includes(value) ) {
            this.domain.splice(this.domain.indexOf(value), 1)
        }
}


    private addValue(value:T) {
        if(!this.domain.includes(value) ) {
            this.domain.push(value)
        }
    }




    private contains(value: T) {
        return this.domain.includes(value);
    }

    private copy() {
        const newDomain = new Domain<T>();
        newDomain.domain = [...this.domain];
        return newDomain;
    }

    private toJSON() {
        return this.domain;
    }




}

export default Domain;