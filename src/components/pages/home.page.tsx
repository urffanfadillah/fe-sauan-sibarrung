import Hero from "../ui/organisms/hero.organism"
import Feature from "../ui/organisms/feature.organism"
import Carousel from "../ui/organisms/carousel.organism"
import Blog from "../ui/organisms/blog.organism"
export default function Home() {
    return (
        <>
            <Hero />
            <Carousel />
            <Feature />
            <Blog />
        </>
    )
}