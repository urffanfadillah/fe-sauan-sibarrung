import { Image } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";

interface kaisunganImageType {
    title: string;    
    description: string;
    image_url: string;
}

export default function GaleriFotoOrg() {

    const [kaisunganImage, setKaisunganImage] = useState<kaisunganImageType[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}gallery-photo`).then((response) => {
            setKaisunganImage(response.data.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings}>
                {
                    kaisunganImage.map((result, index) => 
                        <div key={index}>
                            <Image width={'full'} height={'420px'} src={result.image_url} objectFit={'cover'} backgroundPosition={'center'} />
                        </div>
                    )
                }
            </Slider>
        </>
    )
}