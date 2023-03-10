/**
 * Primmitive types in JavaScript
 * String
 * Null
 * Boolean
 * Undefined
 * Number
 * Symbol
 * BigInt
 * Object
 */

// Defining type by using : after variable
const date: Date = new Date()
console.log(date)

// If function returns nothing set to : void
function someFunc1(input: string): void {
    console.log(input)
}
someFunc1("test")


// This is another way to define a function same as above
const someFunc2 = (input: number): void => {
    console.log(input)
}
someFunc2(12)


/**
 * Type Inference and Gradual typing.
 * you can cast to any to remove errors or set the type as any
 * Cast using 'as' example casting a number to any to define it as a string later on. 
 * NB! a bad idea, this is only to illustrate functionality. Avoid using any in your types
 * 
 */
const y: any = 463
let x = 463 as any
x = "sadasad"
console.log(x)






const someFunc3 = (input: string): { key1: string, key2: string, key3: Date } => {
    return { key1: input, key2: input, key3: new Date() };
}

const value = someFunc3("input")
console.log(value.key3)


/**
 * Interfaces
 */

interface SomeInterface {
    key1: string;
    key2: string;
    key3: Date;
}
const someFunc4 = (input: string): SomeInterface => {
    return { key1: input, key2: input, key3: new Date() };
}

const value2 = someFunc4("input")
console.log(value2.key3)

//TypeScript wont complain about passing an object that is the same as the defined interface
const someFunc5 = (object: SomeInterface): SomeInterface => {
    return object;
}

const value3 = someFunc5({ key1: "s", key2: "input", key3: new Date() })
console.log(value3.key3)


// Defining functions in interfaces and enums
enum SomeEnumType {
    software = "software",
    hardware = "hardware"
}

interface SomeInterface2 {
    key1: SomeEnumType;
    readonly key2: string;  // Set as readonly and not mutatble
    // Optional key3 and functions
    key3?: Date;

    key4?: "name" | "age"; //Same as an enum define a possible range of values

    someFuncInterface?(input: string): string;
    // Same as above
    someFuncInterface2?: (input: string) => string;
}

const someFunc6 = (object: SomeInterface2): SomeInterface2 => {
    return object;
}
const value4 = someFunc6({ key1: SomeEnumType.hardware, key2: "input" })
console.log(value4.key2)


/** Union Types */
type Cost = number | string;
const originalCost: Cost = 10;

// As the originalCost can be both number or string we need to check its type before assigning it to a number type
// this is checked at run time
if (typeof originalCost === "number") {
    const cost: number = originalCost;
    console.log(cost)
}


/** Generics */
function generic<T>(input: T): T {
    return input;
}