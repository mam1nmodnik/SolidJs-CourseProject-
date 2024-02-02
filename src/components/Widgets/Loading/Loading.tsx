import { JSXElement } from 'solid-js'
import ct from './Loading.module.css'
import  gifLoad from '../../../assets/img/1484.gif'

export default function Loading(): JSXElement{
    return(
        <div class={ct.container}> 
            <img class={ct.imgGif} src={gifLoad} alt=""/>
        </div>
    )
}