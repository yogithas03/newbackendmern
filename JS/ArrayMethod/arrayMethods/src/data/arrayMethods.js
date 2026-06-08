

export const arrayMethods = [
  {
    id: "creation",
    title: "Array Creation",
    icon: "📦",
    methods: [
      {
        name: "Array Literal",
        definition: "Creates an array using square brackets.",
        example: "const arr = [1,2,3]",
       

      },
      {
        name: "Array Constructor",
        definition: "Creates array using new keyword.",
        example: "const arr = new Array(1,2,3)"
      },
      {
        name: "Array.of()",
        definition: "Creates array from arguments.",
        example: "Array.of(1,2,3)"
      },
      {
        name: "Array.from()",
        definition: "Creates array from iterable.",
        example: 'Array.from("hello")'
      }
    ]
  },

  {
    id: "access",
    title: "Array Access",
    icon: "🔍",
    methods: [
      {
        name: "indexOf()",
        definition: "Returns first matching index.",
        example: 'arr.indexOf("Apple")'
      }
    ]
  },

  {
    id: "add",
    title: "Array Add",
    icon: "➕",
    methods: [
      {
        name: "push()",
        definition: "Adds item at end.",
        example: 'arr.push("Mango")'
      },
      {
        name: "unshift()",
        definition: "Adds item at start.",
        example: 'arr.unshift("Apple")'
      }
    ]
  },

  {
    id: "remove",
    title: "Array Remove",
    icon: "❌",
    methods: [
      {
        name: "pop()",
        definition: "Removes last item.",
        example: "arr.pop()"
      },
      {
        name: "shift()",
        definition: "Removes first item.",
        example: "arr.shift()"
      }
    ]
  },

  {
    id: "search",
    title: "Array Search",
    icon: "🔎",
    methods: [
      {
        name: "includes()",
        definition: "Checks if value exists.",
        example: 'arr.includes("Apple")'
      }
    ]
  },

  {
    id: "copy",
    title: "Array Copy",
    icon: "📋",
    methods: [
      {
        name: "slice()",
        definition: "Copies part of array.",
        example: "arr.slice(1,3)"
      }
    ]
  },

  {
    id: "convert",
    title: "Array Convert",
    icon: "🔄",
    methods: [
      {
        name: "join()",
        definition: "Converts array to string.",
        example: 'arr.join("-")'
      },
      {
        name: "toString()",
        definition: "Converts array to string.",
        example: "arr.toString()"
      }
    ]
  },

  {
    id: "sort",
    title: "Sort Methods",
    icon: "📊",
    methods: [
      {
        name: "sort()",
        definition: "Sorts array.",
        example: "arr.sort()"
      }
    ]
  },

  {
    id: "reverse",
    title: "Reverse Methods",
    icon: "🔁",
    methods: [
      {
        name: "reverse()",
        definition: "Reverses array.",
        example: "arr.reverse()"
      }
    ]
  },

  {
    id: "iteration",
    title: "Iteration Methods",
    icon: "⚡",
    methods: [
      {
        name: "for",
        definition: "Traditional loop.",
        example: "for(let i=0;i<arr.length;i++){}"
      },
      {
        name: "for...of",
        definition: "Loops values.",
        example: "for(let item of arr)"
      },
      {
        name: "for...in",
        definition: "Loops indexes.",
        example: "for(let i in arr)"
      },
      {
        name: "forEach()",
        definition: "Runs callback.",
        example: "arr.forEach()"
      },
      {
        name: "map()",
        definition: "Creates new array.",
        example: "arr.map()"
      },
      {
        name: "filter()",
        definition: "Filters values.",
        example: "arr.filter()"
      },
      {
        name: "find()",
        definition: "Returns first match.",
        example: "arr.find()"
      },
      {
        name: "reduce()",
        definition: "Reduces values.",
        example: "arr.reduce()"
      },
      {
        name: "every()",
        definition: "Checks all.",
        example: "arr.every()"
      },
      {
        name: "flat()",
        definition: "Flattens array.",
        example: "arr.flat()"
      },
      {
        name: "flatMap()",
        definition: "Map + Flat.",
        example: "arr.flatMap()"
      }
    ]
  },

  {
    id: "static",
    title: "Static Methods",
    icon: "🔥",
    methods: [
      {
        name: "Array.isArray()",
        definition: "Checks array.",
        example: "Array.isArray(arr)"
      }
    ]
  }
];