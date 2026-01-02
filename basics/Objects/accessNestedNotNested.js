//how to create and access properties from an object using dot notation and bracket notation

// Creating an object with properties
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Accessing properties using dot notation
console.log("Using dot notation:");
console.log("Name:", person.name); // Output: Name: Alice

//Accessing properties using bracket notation
console.log("Using bracket notation:");
console.log("Age:", person["age"]); // Output: Age: 30

// You can also use variables with bracket notation
const property = "city";
console.log("City:", person[property]); // Output: City: New York

// Modifying properties
person.age = 31; // Using dot notation
person["city"] = "Los Angeles"; // Using bracket notation

console.log("Updated Age:", person.age); // Output: Updated Age: 31
console.log("Updated City:", person.city); // Output: Updated City: Los Angeles

// Adding new properties
person.country = "USA"; // Using dot notation
person["profession"] = "Engineer"; // Using bracket notation

console.log("New Property - Country:", person.country); // Output: New Property - Country: USA
console.log("New Property - Profession:", person.profession); // Output: New Property - Profession: Engineer

/* when properties are created without quotes, they are treated as strings by default. For example:
const obj = {
    key: "value"
};
is equivalent to
const obj = {
    "key": "value"
};
Both will create a property named "key" with the value "value".
when using bracket notation on property names which are both valid or invalid identifiers, you must use quotes. */



//how to acess nested propeties from an object using dot notation and bracket notation

// Creating a nested object
const student = {
    name: "Bob",
    details: {
        age: 22,
        major: "Computer Science",
        address: {
            city: "San Francisco",
            zip: "94105"
        }
    }
};

// Accessing nested properties using dot notation
console.log("Using dot notation for nested properties:");
console.log("Student Age:", student.details.age); // Output: Student Age: 22
console.log("Student City:", student.details.address.city); // Output: Student City: San Francisco

// Accessing nested properties using bracket notation
console.log("Using bracket notation for nested properties:");
console.log("Student Major:", student["details"]["major"]); // Output: Student Major: Computer Science
console.log("Student Zip:", student["details"]["address"]["zip"]); // Output: Student Zip: 94105

// You can also mix both notations
console.log("Mixing notations:");
console.log("Student Name:", student.name); // Output: Student Name: Bob
console.log("Student City:", student.details["address"].city); // Output: Student City: San Francisco

// Modifying nested properties
student.details.age = 23; // Using dot notation
student["details"]["address"]["city"] = "Los Angeles"; // Using bracket notation

console.log("Updated Student Age:", student.details.age); // Output: Updated Student Age: 23
console.log("Updated Student City:", student.details.address.city); // Output: Updated Student City: Los Angeles

//when they're nested in arrays
// Creating an object with nested arrays
const library = {
    name: "City Library",
    books: [
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        }
    ]
};
// Accessing properties of objects within arrays
console.log("Accessing nested arrays:");
console.log("First Book Title:", library.books[0].title); // Output: First Book Title: 1984
console.log("Second Book Author:", library.books[1]["author"]); // Output: Second Book Author: Harper Lee