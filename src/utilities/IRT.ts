import Papa from "papaparse"

export type Item = {
    word: string;
    b: number; // Item difficulty
    u?: number; // u = item score (either 0 or 1)
}

function raschModel(theta: number, b: number){ // theta = user ability estimate
    return 1 / (1 + Math.exp(-(theta - b)))
}

function calcGradient(theta: number, items: Item[]){
    let gradient = 0
    for (const item of items){
        if (item.u == undefined) throw new Error("only administered items can be accepted.") 
        gradient += item.u - raschModel(theta, item.b)
    }
    return gradient
}

export function loadData(filepath: string){
    if (typeof window !== "undefined"){
        return new Promise<Item[]>(resolve => (Papa.parse(filepath, {
            download: true,
            complete: ({ data } : { data: string[] }) => {
                let items: Item[] = []
                for (let i = 1; i < data.length; i++){
                    const row = data[i]
                    items.push({ word: row[0], b: +row[1]})
                }
                resolve(items)
            }    
        })))
        // const data = await returnPromise()
        // for (let i = 1; i < data.length; i++){
        //     const row = data[i]
        //     items.push({ word: row[0], b: +row[1]})
        // }
    } 
    return new Promise<Item[]>(() => {})
}

export class Operator {
    public static substract(x1: number[] | number, x2: number[] | number): number[] { // Equivalent to np.subtract
        if (typeof x1 === "number" && typeof x2 === "object"){
            return x2.map(element => element - x1)
        }
        if (typeof x1 === "object" && typeof x2 === "number"){
            return x1.map(element => element - x2)
        }
        throw new Error("Either x1 or x2 must be a number.")
    }

    public static abs(array: number[]){ // Equivalent to np.absolute
        return array.map(element => Math.abs(element))
    }

    public static argmin(array: number[]): number {
        let maxIndex = 0
        for (let i = 0; i < array.length; i++){
            if (array[maxIndex] >= array[i]){
                maxIndex = i
            }
        }
        return maxIndex
    }

    public static mean(array: number[]): number {
        let sum = array.reduce((acc, v) => acc + v)
        return sum / array.length
    }
}

class TestingLoop {
    private theta: number
    private numItems: number
    private items: Item[]
    private administerd: Item[]

    public constructor(theta: number, numItems: number, items: Item[]){

        this.theta = theta
        this.numItems = numItems
        this.items = items
        this.administerd = []
    }

    public getTheta(){ return this.theta }

    public estimateTheta(lr: number = 1e-2, thereshold: number = 1e-5, decay: number = 0.999){
        if (this.items.length === 0){
            return this.theta
        }
        let newTheta = 0
        let oldTheta = this.theta
        let i = 0
        
        // Perform gradient descent to maximize log likelihood
        while (Math.abs(newTheta - oldTheta) > thereshold){
            if (i !== 0){
                oldTheta = newTheta
            }
            newTheta = oldTheta + lr * calcGradient(oldTheta, this.administerd)
            i++
            lr *= decay ** i
        }

        return newTheta
    }

    public updateTheta(){
        this.theta = this.estimateTheta()
    }

    public getNextItem(){
        console.log(`Current theta: ${this.theta}\n`)
        let bList: number[] = [] 
        for (const item of this.items){
            bList.push(item.b)
        }

        const index = Operator.argmin(Operator.abs(Operator.substract(bList, this.theta)))
        const item = this.items.splice(index, 1)[0]

        return item
    }

    public append(item: Item) {
        if (this.numItems <= this.administerd.length){
            throw new Error(`max number of items is ${this.numItems}!`)
        }
        this.administerd.push(item)
    }
}

export default TestingLoop