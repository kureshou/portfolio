import { ReactNode } from "react";
 import {Header} from "../header/header";
import Styles from "./layout.module.css"
interface Props{
    children?:ReactNode;
}
export default function Layoutt(props:Props){
    return(
        <>
        <div style={{background:"red",height:"5%"}} >
        <Header></Header>
        <div style={{background:"yellow"}}>
            {props.children}
        </div>
        </div>
        </>
    )
}