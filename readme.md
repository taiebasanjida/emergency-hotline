
 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 Ans: gelElementByid __ selects on element by id,

    getElementsByClassName __ Selects all elements with a given class,

    querySelector __ Selects the first element matching any CSS selector,

    querySelectorAll __ Selects all elements matching any CSS selector

2 How do you create and insert a new element into the DOM?

Ans:   

3 What is Event Bubbling and how does it work?

Ans: Event Bubbling = event starts at target element → moves up to ancestors.

Default behavior for most events like click, focus, keyup.

Can be stopped with stopPropagation() if needed.

 4 What is Event Delegation in JavaScript? Why is it useful?

 Ans:Event Delegation = listening on a parent for events on its children.

Uses event bubbling internally.

Great for dynamic content, performance, and maintainability.

5 What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is a method that stops the browser's default behavior and Normally, clicking a submit button reloads the page.

By using event.preventDefault(), the page reload stops, allowing us to handle the data with JavaScript instead.