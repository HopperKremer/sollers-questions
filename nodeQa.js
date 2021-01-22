// 1.What is nodejs?
    // Node.js is a platform that executes server-side JavaScript programs that can communicate with I/O sources like networks and file systems.
    // Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient

// 2. What is the difference between blocking I/O and non-blocking I/O?***
    // Blocking execute synchronously and non-blocking execute asynchronously.

// 3. What is blocking I/O and What is non-blocking I/O?***
    // Delayed execution of time
    // Blocking is when the execution of additional JavaScript in the Node.js process
    // must wait until a non-JavaScript operation completes.
    // Non-blocking I/O refers to code executing in sequence

// 4. What is callback queue? What is call stack?***
    // Callback Queue: This is where your asynchronous code gets pushed to, and waits for the execution.
    // Stack: This is where all your javascript code gets pushed and executed one by one
    // as the interpreter reads your program, and gets popped out once the execution is done.

// 5. How does event loop work?
    // When the stack is empty but the event queue is not empty it will
    // dequeue one event from the event queue and push its callback to stack.
    // This is why we call it the event loop!
    // The event loop keeps doing this simple thing until the event queue become empty.

// 6. How does nodejs architecture work?
    // Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients.
    // Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.

// 7. what is rest stands for?
    //  Representation State Transfer

// 8. What does body-parser do?
    // Something about request

// 9. What is standalone machine?
    //Any computer that runs node?

// 10. Why do we call object as non-primitive data type?
// 11. What is the difference between primitive and non-primitive data type?
    // Primitive types are passed by value but for objects a copy of the reference is passed
// 12. NPM
        // 1. online repo for nodejs packages and modules which can be downloaded from npmjs.org
        // 2. it has the command line utility to install nodejs packages, version management and dependency management.
// 13. What is a module?
    // In Node.js, Modules are the blocks of encapsulated code that communicates with an
    // external application on the basis of their related functionality.
    // Modules can be a single file or a collection of multiples files/folders.
// 14. what is difference between global and local installation?
// 15. What does package.json do? What are attributes of package.json?
// 16. What is callback function?
// 17. Show example of blocking and non-blocking code.
// 18. What is multi-threaded and single threaded?
// 19. How event driven programming works in nodejs?***