import React from "react";
import Slider from 'infinite-react-carousel'
import '../Carousel/Carousel.css'


const images = [
  {
      id: '1' ,
      title: 'imagen1',
      image: 'https://www.mancihogar.com.ar/wp-content/uploads/2021/07/slide-super-oferta-electro.jpg'
  },
  {
      id: '2' ,
      title: 'imagen2',
      image: 'https://www.gentilehogar.com.ar/web-experto/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBejBORWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--18f2e7cbabe9b3bb9c0ed112d190d2e5d297b149/1440x600-main-banner-SAMSUNG-v2.jpg'
    },
    {
      id: '3' ,
      title: 'imagen3',
      image: 'https://www.aecohogar.com.ar/web-experto/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--703a2131b7de54ed943b106a54e225f2a4b23fe0/3.png'
  }
]

const Carousel = () => {
  return(

    <>
      <section className='slider'>
        {/* <h1 className='slider__title'>Carousel infinite</h1>  */}

      <Slider className='slider__content'>
        {
          images.map(image => 
            <div className='slider__content--item' key={image.id}>
                <img src={image.image} alt={image.title}/>
                <p className={image.title}></p>
            </div>
          )
        }
      </Slider>
      </section>
    </>
  )
}
export default Carousel;