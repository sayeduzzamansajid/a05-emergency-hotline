# Qus no -1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### getElementById is a function that takes a perameter that is a id and it returns the element which have that particular Id, same getElementByClassName also same but it get all the element those have the same class, and both are Html collection.
### querySelector is nodelist that returns only one element that is mached first with the perameter, and querySelectorAll brings all the matched item and returns a array like object.

# Qus no -2: How do you create and insert a new element into the DOM?

### To create a new element we have to get the parent element from document, then declare a variable and create new element by the function createElement( ) for insert a new element get the parent and create new then parent.appenChild(createdElement) such as
``` 
const parent = document.getElementById('container')
const newChild = document.createElement('div')
newChild.inerHTML = `<p>created new child paragraph</p>`
parent.appendChild(newChild)
```

# Qus no -3: What is Event Bubbling and how does it work?

### Event bubbling is a event handling concept where an event triggered on a child element or anywhere then at first it search the target where the event triggered from root to target, then after finding it propagates its parent elements in the DOM tree until it reaches the root (document).

# Qus no -4: What is Event Delegation in JavaScript? Why is it useful?

### event delegation in js is instead of attaching event listeners to multiple child elements individually, attach a single event listener to a common parent element, and then use event bubbling to handle events on its children.

### useful because it cleaner the code and than make easy to handle and manage

# Qus no -5: What is the difference between preventDefault() and stopPropagation() methods?

### preventDefault() is a function that prevents reload when button clicked and by default button type is set to submit, so this function prevent the submit and prevent the page from reload.

### stopPropagation() is also a function that stops the event bubbling to upper layer/ to parent layer, it stop upper bubbling , but same layer multiple event can triggered.