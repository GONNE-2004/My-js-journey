//what's JSON?
const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';

//Parsing JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: Alice
console.log(jsonObject.age);  // Output: 30

//Converting JavaScript object to JSON string
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"Alice","age":30,"city":"New York"}
console.log(typeof newJsonString); // Output: string

//the JSON.stringify() method can also take additional parameters for formatting
const formattedJsonString = JSON.stringify(jsonObject, null, 4); // 4 spaces indentation
console.log(formattedJsonString);
/* Output:
{
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
*/

//JSON is commonly used for data exchange between a server and a web application, as it is lightweight and easy to read and write.

//JSON supports the following data types: strings, numbers, objects, arrays, booleans, and null.
//However, JSON does not support functions, undefined, or special JavaScript objects like Date or RegExp.

//Example of a more complex JSON object
const complexJsonString = `{
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ],
    "company": {
        "name": "Tech Solutions",
        "location": "San Francisco"
    }
}`;

//Parsing the complex JSON string
const complexJsonObject = JSON.parse(complexJsonString);
console.log(complexJsonObject.employees[1].firstName); // Output: Anna
console.log(complexJsonObject.company.name); // Output: Tech Solutions

//Converting back to JSON string
const backToJsonString = JSON.stringify(complexJsonObject, null, 2);
console.log(backToJsonString);
/* Output:
{
  "employees": [
    {
      "firstName": "John",
      "lastName": "Doe"
    },
    {
      "firstName": "Anna",
      "lastName": "Smith"
    },
    {
      "firstName": "Peter",
      "lastName": "Jones"
    }
  ],
  "company": {
    "name": "Tech Solutions",
    "location": "San Francisco"
  }
}
*/