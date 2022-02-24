//Why hash tables are useful
//Lets build hash table and hashing function
//This hashTable has issue of collisions in hash table

class HashTable {
  constructor() {
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] != null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table1 = new HashTable();

for (const char of "hallo world") {
  table1.set(char, char);
}
for (const char of "rizwan") {
  table1.set(char, char);
}

console.log(table1.showInfo());
