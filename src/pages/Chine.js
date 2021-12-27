import React from 'react';
import CommentPost from '../components/CommentPost';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';
import image from '../assets/chinemap.png'
import image2 from '../assets/chine1.jpg'
import image3 from '../assets/chine2.jpg'

const Chine = () => {
    return (
       <div className="china">
                <Navigation />
        <div className='chine'>
                <SideBar />
            <div className="chineContent">
                <h1>Chine</h1>
                <img  className ="imgMap"src={image} width='50%' height='auto' alt="photo88" />
                <p className='firstP'> La Chinec, en forme longue la république populaire de Chine (ou République populaire de Chine avec une majusculed, RPC ; chinois simplifié : 中华人民共和国 ; chinois traditionnel : 中華人民共和國 ; pinyin : Zhōnghuá Rénmín Gònghéguó, prononcé /tʂʊŋ˥xua˧˥ɻən˧˥mɪn˧˥kʊŋ˥˩xə˧˥kuɔ˧˥/ Écouter), également appelée Chine populaire, ou Chine communiste, est un pays d'Asie de l'Est. Avec plus de 1,4 milliard d'habitants, soit environ un sixième de la population mondiale, elle est le pays le plus peuplé du monde. Elle compte six agglomérations de plus de dix millions d'habitants : la capitale Pékin, Shanghai, Chongqing, Tianjin, Canton et Shenzhen, ainsi que plus de trente villes d'au moins deux millions d'habitants. Avec une superficie de 9 600 000 km2 selon l'ONU8 ou de 9 596 960 km2 selon The World Factbook9, la Chine est également le plus grand pays d'Asie orientale et le troisième ou quatrième plus grand pays du monde par la superficie10. La Chine s'étend des côtes de l'océan Pacifique au Pamir et aux Tian Shan, et du désert de Gobi à l'Himalaya et au nord de la péninsule indochinoise.

La Chine est l'un des cinq membres permanents du Conseil de sécurité des Nations unies (république de Chine jusqu'en 1971 puis république populaire de Chine depuis cette date). Elle est le premier exportateur mondial et dispose de l'arme nucléaire, de la plus grande armée du monde (en termes d'effectifs) et du deuxième plus grand budget militaire. Gouvernée par le Parti communiste chinois depuis 1949, la Chine a adopté une « économie socialiste de marché » où capitalisme et contrôle politique totalitaire se côtoient en une formule spécifique. La Constitution de la république populaire de Chine la définit comme « un État socialiste de dictature démocratique populaire, dirigé par la classe ouvrière et basé sur l'alliance des ouvriers et des paysans ». Le préambule de la Constitution spécifie le rôle dirigeant du Parti communiste chinois et continue de citer officiellement le marxisme-léninisme comme idéologie de référence de l'État11.</p>

<div className="imgContainer">
    <img className="img1" src={image2} alt="" />
    <img className="img2" src={image3} alt="" />

</div>
<p className='secondP'>Le Mexique, en forme longue les États-Unis mexicains10 (en espagnol : México et Estados Unidos Mexicanos11) est un pays situé dans la partie méridionale de l'Amérique du Nord.

Délimité à l'est-sud-est par le Guatemala et le Belize, et au nord-nord-ouest par les États-Unis d'Amérique, il est bordé à l'est par le golfe du Mexique et la mer des Caraïbes et au sud-ouest par l'océan Pacifique. C'est le quatorzième pays en superficie, avoisinant 2 millions de km2.

Avec une population estimée en 2020 à 128 649 565 d'habitants, le Mexique se classe ainsi au dixième rang mondial des pays les plus peuplés12. Plus de 99 % des Mexicains parlent l'espagnol mexicain (soit comme langue maternelle ou langue seconde), et plus de 7 millions (environ 6 %) parlent une langue autochtone dont moins de 1 % était monolingue13 ; la loi mexicaine les reconnaît comme langues nationales depuis 2003, mais aucune ne possède le statut de langue officielle. Le Mexique est donc le pays le plus peuplé du monde hispanophone.

Politiquement, le Mexique est une république fédérale, composée de trente-deux entités fédératives dont trente et une ont le statut d'État, Mexico ayant un statut spécial (qui lui permet une autonomie accrue comparable à celle d'un État) car abritant la capitale politique du pays14,15.
</p>



 
            </div>
            
        </div>
        <CommentPost background={'rgb(238, 240, 214)'}/>
        </div>
    );
};

export default Chine;