import Group from '../../assets/svg/Group.svg';
import Group1 from '../../assets/svg/Group(1).svg'
import Frame from '../../assets/svg/Frame64.svg'
import Group2 from '../../assets/svg/Group(2).svg'

export default function SquadNeeds(){
    return(
        <>
			<div class="conteiner-index mt-190px">
				<div class="main-container-statistic">
					<h2 class="_anim-items _anim-no-hide">Отрядные нужды</h2>
					<h3 class="_anim-items _anim-no-hide">Здесь перечислены категории вещей, в которых мы нуждаемся.</h3>
				</div>
				<div class="need-group">
					<div>
						<a href='/SquadNeeds/tents'>
							<div class="need">
								<img src={Group} alt=""/>
							</div>
						</a>
						<h2 class="_anim-items">Палатки</h2>
					</div>	
					<div>
						<a href='/SquadNeeds/backpacks'>
							<div class="need">
								<img src={Group1} alt=""/>
							</div>
						</a>
						<h2 class="_anim-items">Рюкзаки</h2>
					</div>		
					<div>
						<a href='/SquadNeeds/cloth'>
							<div class="need">
								<img src={Frame} alt=""/>
							</div>
						</a>
						<h2 class="_anim-items">Одежда</h2>
					</div>		
					<div>
						<a href='/SquadNeeds/toolse'>
							<div class="need">
								<img src={Group2} alt=""/>
							</div>
						</a>
						<h2 class="_anim-items">Инструменты</h2>
					</div>			
				</div>
			</div>
        </>
    )
}