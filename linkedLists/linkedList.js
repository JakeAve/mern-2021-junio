class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const newNode = new ListNode("a");
// console.table({ newNode });

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data) {
    this.head = new ListNode(data, this.head);
    this.size++;
  }

  insertAtTail(data) {
    const node = new ListNode(data);
    if (!this.head) return this.insertAtHead(data);

    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
    this.size++;
  }

  getAt(idx) {
    let current = this.head;
    let count = 0;
    let val;
    while (count <= idx) {
      if (count === idx) val = current;
      count++;
      if (current) current = current.next;
    }

    return val || undefined;
  }

  slice(start, end) {
    const prim = this.getAt(start);
    const arr = [prim.data];
    let count = start;
    let current = prim;
    while (count < end - 1) {
      if (current) current = current.next;
      if (current) arr.push(current.data);
      count++;
    }
    return arr;
  }

  removerCabeza() {
    this.head = this.head.next;
  }

  remover(idx) {
    if (idx < 0 || idx > this.size - 1)
      throw new Error(`Invalid index: ${idx}`);

    let current = this.head;
    let previo;
    let count = 0;

    if (idx === 0) return this.removerCabeza();

    while (count < idx) {
      count++;
      previo = current;
      current = current.next;
    }
    previo.next = current.next;
  }

  printList() {
    const impreso = [this.head.data];
    let current = this.head;
    while (current.next) {
      current = current.next;
      impreso.push(current.data);
    }
    impreso.push(null);
    return impreso;
  }
}

const list = new LinkedList();

list.insertAtHead("a");
list.insertAtHead("b");
list.insertAtHead("c");
list.insertAtHead("d");
list.insertAtHead("e");
list.insertAtHead("f");
list.insertAtHead("g");
list.insertAtTail("z");

console.table({ list });

const printed = list.printList();
console.table({ printed });

const getAt3 = list.getAt(3);
const getAt2 = list.getAt(2);
const getAt0 = list.getAt(0);
const getAt8 = list.getAt(8);
const getAt20 = list.getAt(20);
const getAtMenos1 = list.getAt(-1);
console.table({ getAt3, getAt2, getAt0, getAt20, getAtMenos1, getAt8 });

console.time("slice");
const slice0thru4 = list.slice(0, 4);
const slice1thru5 = list.slice(1, 5);
const slice2thru10 = list.slice(2, 10);
console.timeEnd("slice");
console.table({ slice0thru4, slice1thru5, slice2thru10 });

list.removerCabeza();
const printed2 = list.printList();
console.table({ printed2 });

list.remover(3);
// list.remover(50);
const printed3 = list.printList();
console.table({ printed3 });
