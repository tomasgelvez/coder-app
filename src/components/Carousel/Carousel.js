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
      image: 'https://s3-us-east-2.amazonaws.com/mieleb2ccl/banner_images/images/000/000/085/large/Banner-Web_Santanderv1_1920x800.jpg?1631216362'
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