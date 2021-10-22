// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.table = [];
//     for (let i = 0; i < this.size; i++) {
//       this.table.push([]);
//     }
//   }

//   parse(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       result += str.charCodeAt(i);
//     }
//     return result;
//   }

//   hash1(key) {
//     return key % this.size;
//   }

//   hash2(key) {
//     let parsedKey = key;
//     if (typeof key !== "number") {
//       parsedKey = this.parse(key);
//     }
//     let A = (Math.sqrt(5) - 1) / 2;
//     return Math.floor(this.size * ((parsedKey * A) % 1));
//   }

//   set(key, value) {
//     let index = this.hash2(key);
//     this.table[index].push({ key, value });
//   }

//   get(key) {
//     let index = this.hash2(key);
//     for (let i = 0; i < this.table[index].length; i++) {
//       if (this.table[index][i].key === key) {
//         return this.table[index][i];
//       }
//     }
//     return null;
//   }

//   printAll() {
//     console.log(this.table);
//   }
// }

// let table = new HashTable(6);
// table.set("black", "#000000");
// table.set("red", "#FF0000");
// table.set("lime", "#00FF00");
// table.set(4, "Blake");
// table.printAll();
// console.log(table.get("black"));
// console.log(table.get(4));

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table.push([]);
    }
  }

  hash1(key) {
    return key % this.size;
  }

  hash2(key) {
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }

  set(key, value) {
    let index = this.hash2(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hash2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let table = new HashTable(6);
table.set(4, "Blake");
table.set(5, "Black");
table.printAll();
