// Code goes here!
//console.log('Section 07')

//* Defualt type that is generic
/*const nameValues = [];
const nameValuesSecond: Array<string> = [];
nameValuesSecond[0];
console.log(nameValuesSecond);*/

//* Main type is Promise but we will get a string
//* Promise<any>
//* If we specify the data, when we use the data in other methods, TS will
//* check errors, and a better TS support.
/*const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!.');
    }, 2000)
})

promise.then(data => {
    data.split(' ');
})*/

//* Create our own generic Function.
//* We can create generics with < >
//* T for Type.
//* U for another type
//* We get different type of data, we can intersect that data.
//* T and U can be any object, but they should be an object all the time.
//* T extends number | string, can we use unions here
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'David', hobbies: ['Sports']}, {age: 30})
//const mergedObj2 = merge({name: 'David'}, {age: 30})


//console.log(merge({name: 'David'}, {age: 35}))
console.log(mergedObj.age)


interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
       descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndPrint('Hi there!'))


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key];
}

console.log(extractAndConvert({name: 'Madara'}, 'name'))


//* Generic Classes
class DataStorage<T extends string | number | boolean> { 
    private data: T[] = [];
    //* We dont care about data, we can use any date.
    //* Now change it to a generic class
    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('David');
textStorage.addItem('Franklin')
textStorage.removeItem('David');
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
/*const objStorage = new DataStorage<object>();

objStorage.addItem({name: 'Francisco'})
objStorage.addItem({name: 'Maria'});
objStorage.removeItem({name: 'Francisco'});

console.log(objStorage.getItems())*/





interface  CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): 
CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal
} {
    //return {title: title, description: description, completeUntil: date}
    
}

const names: Readonly<string[]> = ['David', 'Anna'];

//* Generic Types vs Union Types