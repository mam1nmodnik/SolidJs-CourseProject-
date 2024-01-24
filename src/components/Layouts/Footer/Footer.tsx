import Facebook from '../../../assets/img/facebookOrange.png'
import Twitter from '../../../assets/img/iconTwitterOrange.png'
import VK from '../../../assets/img/VKOrange.png'
import YouTube from '../../../assets/img/youtubeOrange.png'

export default function Footer(){

    return(
        <footer>
            <div class="footer-flex">
                <div class="footer-flex2">
                    <p class="p-name">
                        <span style="color: #FFFFFF;">Спасатели </span>
                        <span class="color-logo">Т</span>
                        <span class="color-logo">С</span>
                        <span class="color-logo">П</span>
                        <span class="color-logo">К</span>
                    </p>
                    <div class="footer-flex3">
                        <h4 class="footer-h4">Политика<br/> конфидициальности</h4>
                        <h4 class="footer-h4">Соглашение на обработку<br/> персональных данных</h4>
                        <h4 class="footer-h4">Правила безопасности</h4>
                    </div>
                </div>
                <div class="footer-flex4">
                    <a class="footer-number" href='tel:8(937)6648999'>8(937)6648999</a>
                    <h4 class="footer-street"> г. Тольятти, <br/> ул. Мурысева 84</h4>
                    <div class="footer-flex5">
                        <img src={YouTube} alt=""/>
                        <img src={Facebook} alt=""/>
                        <img src={Twitter} alt=""/>
                        <img src={VK} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )

}