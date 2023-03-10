import { setDoc, doc, query, collection, orderBy, getDocs } from "firebase/firestore";
import { firestore } from "../firebase.config";


export const saveItem = async(data) =>{
    await setDoc(doc(firestore, "Infomation", `${Date.now()}`), data,{
        merge:true
    })
}
export const getItem = async() =>{
    const items = await getDocs(
        query(collection(firestore, "Infomation"), orderBy("id", "desc"))
    ) 
    return items.docs.map((doc)=>doc.data())
}



export const saveItemR = async(dataa) =>{
    await setDoc(doc(firestore, "InfomationR", `${Date.now()}`), dataa,{
        merge:true
    })
}
export const getItemR = async() =>{
    const items = await getDocs(
        query(collection(firestore, "InfomationR"), orderBy("id", "desc"))
    ) 
    return items.docs.map((doc)=>doc.data())
}
