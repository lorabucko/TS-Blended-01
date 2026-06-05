function createUser({ name, age }:{ name: string; age: number }):
    { name: string; age: number; isAdmin: boolean; }
{ return { name, age, isAdmin: false } };

createUser({ name: "Alice", age: 30 });

