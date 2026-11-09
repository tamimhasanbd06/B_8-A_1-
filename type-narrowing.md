# Type Narrowing in TypeScript

## Introduction

Type Narrowing হচ্ছে TypeScript-এর একটি গুরুত্বপূর্ণ Feature। এর মাধ্যমে আমরা কোনো Variable-এর একাধিক সম্ভাব্য Type থেকে নির্দিষ্ট Type চিহ্নিত করতে পারি। এটি আমাদের Code-কে আরও Safe এবং Reliable করতে সাহায্য করে। বিশেষ করে Union Type ব্যবহার করার সময় Type Narrowing অনেক কাজে লাগে।

## What is Type Narrowing?

ধরো, একটি Variable-এর Type হতে পারে String অথবা Number। এখন আমরা যদি সেই Variable-এর ওপর নির্দিষ্ট কোনো String Method ব্যবহার করতে চাই, তাহলে আগে নিশ্চিত হতে হবে যে Variable-টি String কি না। এই Type Check করার প্রক্রিয়াকেই Type Narrowing বলা হয়।

## Using typeof Operator

`typeof` Operator ব্যবহার করে আমরা Primitive Data Type চেক করতে পারি।

```typescript
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toString();
}
```

এখানে TypeScript বুঝতে পারে যে `if` Block-এর ভিতরে `value` একটি String। তাই নিরাপদে `toUpperCase()` ব্যবহার করা যায়।

## Using instanceof Operator

`instanceof` Operator ব্যবহার করে কোনো Object নির্দিষ্ট Class-এর Instance কি না, তা পরীক্ষা করা যায়।

```typescript
function getDateInfo(value: Date | string): string {
    if (value instanceof Date) {
        return value.toDateString();
    }

    return value.toUpperCase();
}
```

## Using in Operator

`in` Operator ব্যবহার করে কোনো Object-এর মধ্যে নির্দিষ্ট Property আছে কি না, তা পরীক্ষা করা যায়।

```typescript
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function getUserInfo(person: Admin | User): string {
    if ("role" in person) {
        return person.role;
    }

    return person.email;
}
```

## Conclusion

সবশেষে বলা যায়, Type Narrowing TypeScript-এ Type Safety নিশ্চিত করার একটি গুরুত্বপূর্ণ পদ্ধতি। `typeof`, `instanceof` এবং `in` Operator ব্যবহার করে আমরা সহজেই বিভিন্ন Type পরীক্ষা করতে পারি। এর ফলে Code আরও পরিষ্কার, নিরাপদ এবং Maintainable হয়।
