"use strict";
class Mimi {
    constructor(name, age, height, eyes, fingers) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.eyes = eyes;
        this.fingers = fingers;
    }
    toString(arr) {
        //turns to string
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
            if (i < arr.length - 1)
                result += ",";
        }
        console.log(result);
    }
    at(arr, index) {
        //finds value of an index of an item in array
        let actualIndex = index >= 0 ? index : arr.length + index;
        if (actualIndex >= 0 && actualIndex < arr.length) {
            console.log(arr[actualIndex]);
        }
        else {
            console.log(undefined); // Just like .at() returns undefined
        }
    }
    join(arr, seperator) {
        //turns to to string and seprates them
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
            if (i < arr.length - 1)
                result += seperator;
        }
        console.log(result);
    }
    pop(arr) {
        //Manually doing it
        //removing last element from array
        if (arr.length > 0) {
            arr.length = arr.length - 1;
            console.log(arr);
        }
    }
    push(arr, item) {
        //Manually doing it
        //pushing an item to an array
        arr[arr.length] = item;
        console.log(arr);
    }
    shift(arr) {
        //removes first element and logs it out 
        if (arr.length === 0)
            return undefined;
        const firstElement = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length--;
        console.log(firstElement);
    }
    delete(arr, index) {
        if (index >= 0 && index < arr.length) {
            arr[index] = undefined; // Simulates a "hole" (like `delete` would)
        }
    }
    splice(arr, start, deleteCount, ...items) {
        const removed = [];
        // Normalize start index
        if (start < 0)
            start = arr.length + start;
        if (start < 0)
            start = 0;
        if (start > arr.length)
            start = arr.length;
        // Collect removed elements
        for (let i = 0; i < deleteCount && (start + i) < arr.length; i++) {
            removed.push(arr[start + i]);
        }
        // Shift the rest of the array to remove deleted elements
        const tail = [];
        for (let i = start + deleteCount; i < arr.length; i++) {
            tail.push(arr[i]);
        }
        arr.length = start; // start
        for (let i = 0; i < items.length; i++) {
            arr[arr.length] = items[i]; // Adds new items
        }
        for (let i = 0; i < tail.length; i++) {
            arr[arr.length] = tail[i]; // Re-adding a tail
        }
        console.log(removed);
        return removed;
    }
    slice(arr, start, end) {
        const result = [];
        if (start < 0)
            start = arr.length + start;
        if (end == null)
            end = arr.length;
        if (end < 0)
            end = arr.length + end;
        for (let i = start; i < end && i < arr.length; i++) {
            if (i >= 0)
                result.push(arr[i]);
        }
        return result;
        console.log(result);
    }
    unshift(arr, ...items) {
        // Shift existing elements to the right
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i + items.length] = arr[i];
        }
        // Insert new items at start
        for (let i = 0; i < items.length; i++) {
            arr[i] = items[i];
        }
        console.log(arr.length);
        return arr.length;
    }
}
const eye1 = new Mimi("Funmi", 19, 5.6, ['brown', 'blue'], ['thumb', 'index', 'middle', 'ring', 'pinky']);
// console.log(eye1.toString());
eye1.toString(eye1.eyes);
eye1.toString(eye1.fingers);
eye1.at(eye1.eyes, 1);
eye1.at(eye1.fingers, 3);
eye1.join(eye1.eyes, ",");
eye1.join(eye1.fingers, ";");
eye1.pop(eye1.eyes);
eye1.pop(eye1.fingers);
// console.log(eye1.eyes, eye1.fingers) //checking if working properly
eye1.push(eye1.eyes, "blue");
eye1.push(eye1.fingers, "pinky");
eye1.shift(eye1.eyes);
eye1.shift(eye1.fingers);
eye1.delete(eye1.eyes, 1);
eye1.delete(eye1.fingers, 2);
eye1.splice(eye1.eyes, 2, 1, "green1", "green");
eye1.splice(eye1.fingers, 3, 1, "thumb1", "thumb2");
eye1.slice(eye1.eyes, 1, 3);
eye1.slice(eye1.fingers, 0, 2);
eye1.unshift(eye1.eyes, "hazel");
eye1.unshift(eye1.fingers, "super-thumb");
