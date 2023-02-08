# DS-cli
A node based cli which implements &amp; interacts with an In memory Data Structure

```# Console Application
## DataStructure:

- Need to implement Stack & Queue methods:
  - push, pop, isEmpty, size
- Underlying data structure for both should be LinkedList.
- Type Definition should work.
- Implement a getIteration for each.
  - Returns object of {hasNext(): boolean, next: DataType}

## Console App
- At a time only 1 DS will be present.
- 

- Commands:

> `new stack` : Create a new stack. If any DS already existing, then flush the same.
> `new queue` : Create a new queue. If any DS already existing, then flush the same.
> `push 1234` : push the element (string) to the underlying DS. (IF underlying DS not present, handle)
> `pop` : pop element from underlying stack. (IF underlying DS not present, handle)
> `print` : traverse underlying DS. print each element on new line.
> `flush` : pop all elements and print on new line.
> `exit` : exit the console app.

```