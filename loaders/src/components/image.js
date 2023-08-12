import gamballImg from '../img/gamball.png'

export default class Image {

    insertImage(){

        const img = document.createElement('img');

        img.src = gamballImg;
        img.width = 200;

        document.querySelector('body').appendChild(img);

    }

}