# What is *this*

- In javaScript, the *this* keyword refers to an object
- which object depends on how *this* is beign invoked (used or called).
- The this keyword refers to different objects depending on how it is used:

- In an object method, this refers to the object;
- Alone, this refers to the global object
- In a function, this refers to the global object
- In a function, in strict mode, this is undefined
- In an event, this refers to the element that received the event

# Accessing Object Methods

- objectName.methodName()

name = person.fullName();