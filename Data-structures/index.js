const Queue = require("./Queue");
const Stack = require("./Stack");
const CustomError = require("../Utilities/Error");

/**
 * @typedef {(number|string)} AcceptedValues
 *  @typedef {Stack | Queue} 
 *  */

const supportedTypes = ["stack", "queue"];

class DataStructureApplication {
  /**@private
   * @type {boolean}
   */
  #activeInstance = false;
  /**@private
   *  @type {supportedTypes}*/
  #type;
  /**@private
   * @type {(Stack | Queue)} */
  #instance;

  /**
   *
   * @param {supportedTypes} type
   *
   * @returns null
   */
  create(type) {
    if (!supportedTypes.includes(type))
      throw new CustomError(
        `DS-Application`,
        `\n Only the types : \n ${supportedTypes.join("\n")} `
      );
    if (this.#activeInstance) this.flush();
    switch (type) {
      case "stack":
        {
          this.#instance = new Stack();
          this.#type = type;
          this.#activeInstance = true;
        }
        break;

      case "queue":
        {
          this.#instance = new Queue();
          this.#type = type;
          this.#activeInstance = true;
        }
        break;
    }
  }

  /**
   *
   * @param {string | null} print
   * @returns {Array<AcceptedValues | null>}
   */
  flush(print) {
    let ret = [];
    if (print) ret = this.print();
    this.#activeInstance = false;
    this.#instance = null;
    this.#type = null;
    return ret;
  }
  /**
   *
   * @param {AcceptedValues} value
   * @returns boolean
   */
  push(value) {
    if (this.#type == "stack") return this.#instance.push(value);
    else if ((this.#type = "queue")) return this.#instance.enqueue(value);
  }
  /**
   * @param null
   * @returns {(AcceptedValues | null)}
   */
  pop() {
    if (this.#type == "stack") return this.#instance.pop();
    else if ((this.#type = "queue")) return this.#instance.deque();
  }

  /**
   *
   * @returns {Array<AcceptedValues>}
   */
  print() {
    let iterator = this.#instance.getIterator();
    let outputArray = [];
    let sequence = iterator.next();
    while (sequence.hasNext || sequence.next) {
      let tempVal = sequence.next?.value;
      outputArray.push(tempVal);
      console.log("\n", tempVal);
      sequence = iterator.next();
    }
    return outputArray;
  }

  exit() {
    console.log(`Exiting the console for now`);
    process.exit(0);
  }
}

module.exports = DataStructureApplication;
