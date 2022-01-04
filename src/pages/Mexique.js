import React from 'react';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';
import image from '../assets/mexiquemap.png'
import image2 from '../assets/mexique1.jpg'
import image3 from '../assets/mexique2.jpg'
import CommentPost from '../components/CommentPost';




const Mexique = () => {
    return (
        <>
            <Navigation className='navigation' />
        <div className='mexique'>
            <SideBar className='sideBar' />
            <div className="mexiqueContent">
                <h1>Mexique </h1>
                <img  className ="imgMap"src={image} width='50%' height='auto' alt="photo88" />
                <p className='firstP'>Le Mexique, en forme longue les États-Unis mexicains10 (en espagnol : México et Estados Unidos Mexicanos11) est un pays situé dans la partie méridionale de l'Amérique du Nord.

Délimité à l'est-sud-est par le Guatemala et le Belize, et au nord-nord-ouest par les États-Unis d'Amérique, il est bordé à l'est par le golfe du Mexique et la mer des Caraïbes et au sud-ouest par l'océan Pacifique. C'est le quatorzième pays en superficie, avoisinant 2 millions de km2.

Avec une population estimée en 2020 à 128 649 565 d'habitants, le Mexique se classe ainsi au dixième rang mondial des pays les plus peuplés12. Plus de 99 % des Mexicains parlent l'espagnol mexicain (soit comme langue maternelle ou langue seconde), et plus de 7 millions (environ 6 %) parlent une langue autochtone dont moins de 1 % était monolingue13 ; la loi mexicaine les reconnaît comme langues nationales depuis 2003, mais aucune ne possède le statut de langue officielle. Le Mexique est donc le pays le plus peuplé du monde hispanophone.

Politiquement, le Mexique est une république fédérale, composée de trente-deux entités fédératives dont trente et une ont le statut d'État, Mexico ayant un statut spécial (qui lui permet une autonomie accrue comparable à celle d'un État) car abritant la capitale politique du pays14,15.
</p>
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
        <CommentPost />
        </>
    );
};

export default Mexique;