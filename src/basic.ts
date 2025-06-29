let a: string = "brace"
console.log({a});

// ---------------- 基本類型 --------------
let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined
let test : any = true

// array
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aa', 'bb'], ['ss', 'xx']]

// 元祖
let tuple :[number, string, boolean] = [123, 'aaa', false]
let tuple2: [string, string] [] = [['aa', 'bb']]



// ---------------- Enum --------------

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const s = LiveStatus.SUCCESS
console.log({s});


// ---------------- Union --------------
let aaa: number | string
aaa = 1000
aaa = 'str'

// ---------------- Type --------------
type A = number | string
type B = number | string

let a1: A
a1 =999
a1 = 'str'

let b1: B
b1 =888
b1 = 'str2'

// ---------------- interface --------------

interface User {
    name:string
    age : number
}


// ---------------- object --------------

type Card = {
    name: string
    desc: string
}

const obj: Card = {
    name: 'brace',
    desc: "......"
}

interface Card2 {
    name: string
    desc: string
}

interface Card2{
    age: number
}

// "?" means it is an option
interface Card2{
    tall?: number
}

// type can't be extended,but interface can do it 
const obj2: Card2 = {
    name: 'brace',
    desc: "......",
    age: 123
}


// ---------------- function --------------

function hello (a: string, b: string){
    return a + b
}

function hello2 (a: string, b: string): number{
    console.log({a, b});
    
    return 999
}

