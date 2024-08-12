import TestingLoop, { Operator, loadData, Item } from "./IRT";
import { useState, useEffect, useMemo } from "react";

export default function useIRT(numItems: number){
    const [ data, setData ] = useState<Item[]>([{ word: "", b: 0 },])
    const [ item, setItem ] = useState<Item>({ word: "", b: 0 })
    const tl = useMemo<TestingLoop>(() => {
        const noise = 0.04
        const initTheta = Operator.mean(data.map(item => item.b)) + noise * 2 * Math.random() - noise
        return new TestingLoop(initTheta, numItems, data)
    }, [numItems, data])

    useEffect(() => {
        async function load(){
            const data = await loadData("/vocab.csv")
            setData(data)
        }
        load()
    }, [])

    useEffect(() => {
        tl.updateTheta()
        const newItem = tl.getNextItem()
        setItem(newItem)
    }, [data])

    useEffect(() => {
        if (item?.u !== undefined){
            tl.append(item)
            tl.updateTheta()
            const newItem = tl.getNextItem()
            setItem(newItem)
        }
    }, [item])

    return [ item, setItem, tl.getTheta() ] as const
}