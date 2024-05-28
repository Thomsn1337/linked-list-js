import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append(3);
list.append(5);
console.log(list.toString()); // (3) -> (5)

list.prepend(8);
console.log(list.toString()); // (8) -> (3) -> (5)

console.log(list.size); // 3

console.log(list.contains(3)); // true
console.log(list.find(5)); // 2

console.log(list.head);
console.log(list.tail);
console.log(list.at(1));

list.pop();
console.log(list.toString()); // (8) -> (3)

list.insertAt(1, 9);
list.insertAt(2, 4);
console.log(list.toString()); // (8) -> (9) -> (4) -> (3)

list.removeAt(2);
console.log(list.toString()); // (8) -> (9) -> (3)
