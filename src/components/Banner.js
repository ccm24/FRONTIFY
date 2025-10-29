import banner_maneskin from '../assets/img/banner _maneskin.png';
import "./Banner.css";

function Banner() {
    return (
    <div className='banner'>
        <img className='img_banner' src={banner_maneskin} />
    </div>)
}

export default Banner;