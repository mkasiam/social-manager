<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the provided code, there is a small mistake. Instead of using the variable name "greeting," "greetign" is mistakenly written. Because of this typo, when the code tries to log the "greetign" variable, it will result in a ReferenceError because the correct variable name should be "greeting".</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The code will produce a result of "12" (a string) .Because One is a number and another one is a string.It combines the number 1 with the string "2" because in JavaScript, when you use the + operator to add values, if one of the operands is a string, JavaScript performs string concatenation.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Even though we change the info.favoriteFood to "🍝," it doesn't affect the original food array, as info.favoriteFood is a separate variable that holds a copy of the value from food[0]. The two variables, info.favoriteFood and food[0], are separate references to different values.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The correct answer is B because the sayHi function is called without passing any argument for the name parameter. In JavaScript, when a function is called with missing arguments, the missing parameters take the value of undefined. So, the resulting string will be "Hi there, undefined" in this case.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the code you provided, you have a list of numbers like [0, 1, 2, 3]. The forEach loop looks at each number one by one.In the given code, the loop looks at each number in the list one by one. It checks if the number is not equal to zero, like asking "Is this number not zero?" For the numbers 1 and 2, the answer is "yes," so we add 1 to the count for each of them. In the end, we counted 2 numbers that weren't zero, so the result is 2.</i>

</p>
</details>
