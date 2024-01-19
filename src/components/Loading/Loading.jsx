import ct from './Loading.module.css'
export default function Loading(){
    return(
        <div className={ct.container}> 
            <img className={ct.imgGif} src="../assets/1484.png" alt="" />
        </div>
    )
}