import Feature from "../ui/organisms/feature.organism"
import Carousel from "../ui/organisms/carousel.organism"
import Blog from "../ui/organisms/blog.organism"
import VisiMisiNilai from "../ui/organisms/visiMisiNilai.organism"

export default function Home() {
    return (
        <>
            <Carousel />
            <Blog />
            <Feature />
            <VisiMisiNilai />
        </>
    )
}