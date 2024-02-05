import Nav from "./Nav"
import YouTube from "../../../assets/img/iconYouTube 1.png"
import FaceBoock from "../../../assets/img/iconFB.png"
import Twitter from "../../../assets/img/iconTwitter.png"
import VK from "../../../assets/img/iconVK.png"
import { A } from "@solidjs/router";

export default function HeaderBlock(){
    return(
        <div class="img-background">
            <div class="conteiner-index content__headerBlock">
                <Nav addClass={false}/>
                <div class="main-designation-container">
                    <div>
                        <div>
                            <p class="motto _anim-items _anim-no-hide">Один за всех <br/> и все за одного</p>
                        </div>
                        <div>
                            <h3 class="_anim-items _anim-no-hide">Поисково-спасательный отряд «Спасатели ТСПК»  ищет тех, кто потерялся</h3>
                        </div>
                        <div class="container-volunteer">
                        <a href='/#volunteers'><button>Стать добровольцем</button></a>
                        </div>
                    </div>
                    <div class="social-media-container">
                        <p class="social-media">Подписывайтесь в соцсетях</p>
                        <div class="social-media-flex">
                            <img src={YouTube} alt="" srcset="" />
                            <img src={FaceBoock} alt="" srcset="" />
                            <img src={Twitter} alt="" srcset="" />
                            <img src={VK} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}