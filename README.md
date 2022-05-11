# NodeJS design patterns

This repository contains several Design Patterns examples implemented with node.js. Those examples were presented in LinkedIn course **Node.js: Design Patterns** (https://www.linkedin.com/learning/node-js-design-patterns).

### List of used Design patterns
_Excerpts from a "gang of four" book Design Patterns - Elements of Reusable Object-Oriented Software._

**Prototype**  
Specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype.

**Singleton**  
Ensure a class only has one instance, and provide a global point of access to it.

**Factory**  
Define an interface for creating an object, but let subclasses decide which class instantiate. Factory method lets a class defer instantiation to subclasses.

**Builder**  
Separate the construction of a complex object from its representation so that the same construction process can create different representations.

**Adapter**  
Convert the interface of a class into another clients expects. Adapter lets classes work togerher that coudn’t otherwise because of incompatible interfaces.

**Proxy**  
Provide a surrogate (nahrada) or placeholder for another object to control access to it.

**Composite**  
Compose objects into tree structure to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

**Decorator**  
Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

**Chain of responsibility**  
Avoid coupling the sender of a request to its receiver by giving more than one object a change to handle the request. Chain the receiving objects and pass the request along the chain.

**Command**  
Encapsulate a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations.

**Iterator**  
Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

**Observer**  
Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Strategy**  
Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary indepedently from clients that use it.