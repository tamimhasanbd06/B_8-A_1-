// function multiplyValue(
//     value: number,
//     multiplier: number = 2
// ): number {
//     return value * multiplier;
// }

// const testCases: [number, number | undefined, number][] = [
//     [10, undefined, 20],
//     [10, 5, 50],
//     [7, 0, 0],
//     [5, 1, 5],
//     [5, 2, 10],
//     [10, -2, -20],
//     [-5, 3, -15],
//     [-5, -2, 10],
//     [0, 5, 0],
//     [0, undefined, 0],
//     [2.5, 2, 5],
//     [1.5, 3, 4.5],
//     [100, undefined, 200],
//     [10, 0.5, 5],
//     [-10, undefined, -20]
// ];

// for (const [value, multiplier, expected] of testCases) {
//     const actual: number = multiplyValue(value, multiplier);

//     const passed: boolean = Object.is(actual, expected);

//     console.log(
//         `${passed ? "PASS" : "FAIL"} | Expected: ${expected} | Actual: ${actual}`
//     );
// }





// import { processInput } from "./solutions";

// interface TestCase {
//     name: string;
//     input: string | number | boolean;
//     expected: string | number;
// }

// const testCases: TestCase[] = [
//     {
//         name: "String with spaces",
//         input: "  TypeScript  ",
//         expected: "typescript"
//     },
//     {
//         name: "Uppercase string",
//         input: "HELLO WORLD",
//         expected: "hello world"
//     },
//     {
//         name: "Normal string",
//         input: "JavaScript",
//         expected: "javascript"
//     },
//     {
//         name: "Empty string",
//         input: "",
//         expected: ""
//     },
//     {
//         name: "String with only spaces",
//         input: "     ",
//         expected: ""
//     },
//     {
//         name: "Positive number",
//         input: 7,
//         expected: 70
//     },
//     {
//         name: "Zero",
//         input: 0,
//         expected: 0
//     },
//     {
//         name: "Negative number",
//         input: -5,
//         expected: -50
//     },
//     {
//         name: "Decimal number",
//         input: 2.5,
//         expected: 25
//     },
//     {
//         name: "Large number",
//         input: 100,
//         expected: 1000
//     },
//     {
//         name: "True boolean",
//         input: true,
//         expected: "Active"
//     },
//     {
//         name: "False boolean",
//         input: false,
//         expected: "Inactive"
//     }
// ];

// let passedTests: number = 0;
// let failedTests: number = 0;

// console.log("\n========== PROCESS INPUT TESTING ==========\n");

// for (const test of testCases) {

//     const actual: string | number = processInput(test.input);

//     const isPassed: boolean = Object.is(actual, test.expected);

//     if (isPassed) {
//         passedTests++;

//         console.log(
//             `PASS: ${test.name} | Expected: ${test.expected} | Actual: ${actual}`
//         );

//     } else {
//         failedTests++;

//         console.log(
//             `FAIL: ${test.name} | Expected: ${test.expected} | Actual: ${actual}`
//         );
//     }
// }

// console.log("\n=============== TEST SUMMARY ===============");

// console.log(`Total Tests: ${testCases.length}`);
// console.log(`Passed: ${passedTests}`);
// console.log(`Failed: ${failedTests}`);

// console.log(
//     `Success Rate: ${((passedTests / testCases.length) * 100).toFixed(2)}%`
// );

// console.log("============================================\n");
