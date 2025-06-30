let a: string = "brace"
console.log({ a });

// ---------------- 基本類型 --------------
let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined
let test: any = true

// array
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aa', 'bb'], ['ss', 'xx']]

// 元祖
let tuple: [number, string, boolean] = [123, 'aaa', false]
let tuple2: [string, string][] = [['aa', 'bb']]



// ---------------- Enum --------------

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const s = LiveStatus.SUCCESS
console.log({ s });


// ---------------- Union --------------
let aaa: number | string
aaa = 1000
aaa = 'str'

// ---------------- Type --------------
type A = number | string
type B = number | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1 = 888
b1 = 'str2'

// ---------------- interface --------------

interface User {
    name: string
    age: number
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

interface Card2 {
    age: number
}

// "?" means it is an option
interface Card2 {
    tall?: number
}

// type can't be extended,but interface can do it 
const obj2: Card2 = {
    name: 'brace',
    desc: "......",
    age: 123
}


// ---------------- function --------------

function hello(a: string, b: string) {
    return a + b
}

function hello2(a: string, b: string): number {
    console.log({ a, b });

    return 999
}

// undefined
function test2(a: number) {
    console.log({ a });

}

function hello3(a: string, age?: number) {
    if (age === undefined) return -1
    test2(age)//age is an option,加上上面這行才不會有虛線
}

// 箭頭涵式也會自動幫你推倒return type
const fun1 = () => { }
const fun2 = () => { return 888 }


// ---------------- 斷言 nuknown --------------

type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}

const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta = {
    name: string
}

// 假設內容是動態的
const beta = data1 as unknown as Beta


// ---------------- class --------------

// private
// public
// protected

class Live {
    roomName: string
    private id: string
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        console.log('建立直撥中....');

        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }

}

const live = new Live('1號', '000001', 'bruce')
// console.log(live.id); // 只有在開發的時後會用到 避免其他開發者引用
console.log(live); // 這樣還是能印出來，看所有值

class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1)
    }

    start() {

    }
}

const carLive = new CarLive('car room', '000002', 'bruce')
console.log(live);
console.log(carLive);


class Live2 {
    #name // js真正的私有變數
    constructor(name1: string) {
        this.#name = name1
    }
}

const live2 = new Live2('live2')
// console.log(live2.#name); // 訪問不到
console.log(live2); //看不到 name













