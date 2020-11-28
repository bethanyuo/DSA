class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value; // O(1) Constant
        this.length++;
        return this.length;
    }

    pop() {
        delete this.data[this.length - 1]; //GET only the last INDEX, so if array.LENGTH = 2, LAST INDEX = 1 ==> {0,1}
        this.length--;
        return this.length;
    }

    delete(index) {
        delete this.data[index];
        this.shiftItems(index);
        const lastItem = this.data[this.length - 1];
        return lastItem;
    }

    shiftItems(index) { // O(n) Linear
        for (let i = index; i < this.length - 1; i++) { // already KNOW the EXACT INDEX, so looping only thru the INDICES
            this.data[i] = this.data[i + 1]; // allows for shifting the all indices over by 1, replacing the previous index
        }
        delete this.data[this.length - 1]; //now deletes the final value in the array
        this.length--;
    }

    // pop() {
    //     const lastItem = this.data[this.length - 1];
    //     delete this.data[this.length - 1];
    //     this.length--;
    //     return lastItem;
    // }
}

const newArray = new MyArray();
newArray.push("Hello World")
newArray.push("New World")
newArray.push(100)
newArray.push("Last World")
console.log(newArray);
console.log("New length ==>" + newArray.push("ALL Worlds"));
console.log(newArray);
// newArray.pop();
// newArray.pop();
console.log("Last Item after DELETE ==>" + newArray.delete(3));
console.log(newArray);
//console.log(this); //Empty Array {}
