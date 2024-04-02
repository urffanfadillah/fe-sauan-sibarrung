import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DaftarKomentar from "../ui/organisms/daftarkomentar.organism";
import { Helmet } from "react-helmet-async";

interface detailBeritaTypes {
    title: string;
    content: string;
    created_at: string;
    slug: string;
    image_url: string;
}

export default function DetailBerita() {
    const { idBerita } = useParams();
    const [detailBerita, setDetailBerita] = useState<detailBeritaTypes>({
        title: "",
        content: "",
        created_at: "",
        slug: "",
        image_url: "",
    });
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}berita-detail/${idBerita}`)
            .then((response) => {
                setDetailBerita(response.data.data);                
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Helmet>
                {/* <title>{detailBerita?.title}</title>
                <meta property="og:title" content={detailBerita?.title} />
                <meta property="og:description" content={detailBerita?.content} />
                <meta property="og:image" content={detailBerita?.image_url} />
                <meta property="twitter:image" content={detailBerita?.image_url} />
                <meta property="facebook:image" content={detailBerita?.image_url} />
                <meta property="og:url" content={window.location.href} /> */}
                <meta name="title" content="CU Sauan Sibarrung Mengadakan Program Pelatihan bagi Supporting Unit" />
                <meta name="description" content="Credit Union Saun Sibarrung telah mengadakan program pelatihan bagi Supporting Unit yang dihadiri oleh Ibu Wenef Natalia Palamba dan tim (BNI Makale) sebagai fasilitator dengan jumlah peserta 12 orang. Kegiatan ini berlangsung pada tanggal 3 februari 2024 bertempat di aula kantor pusat CU Sauan Sibarrung." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cusauansibarrung.org/" />
                <meta property="og:title" content="CU Sauan Sibarrung Mengadakan Program Pelatihan bagi Supporting Unit" />
                <meta property="og:description" content="Credit Union Saun Sibarrung telah mengadakan program pelatihan bagi Supporting Unit yang dihadiri oleh Ibu Wenef Natalia Palamba dan tim (BNI Makale) sebagai fasilitator dengan jumlah peserta 12 orang. Kegiatan ini berlangsung pada tanggal 3 februari 2024 bertempat di aula kantor pusat CU Sauan Sibarrung." />
                <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cusauansibarrung.org/" />
                <meta property="twitter:title" content="CU Sauan Sibarrung Mengadakan Program Pelatihan bagi Supporting Unit" />
                <meta property="twitter:description" content="Credit Union Saun Sibarrung telah mengadakan program pelatihan bagi Supporting Unit yang dihadiri oleh Ibu Wenef Natalia Palamba dan tim (BNI Makale) sebagai fasilitator dengan jumlah peserta 12 orang. Kegiatan ini berlangsung pada tanggal 3 februari 2024 bertempat di aula kantor pusat CU Sauan Sibarrung." />
                <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
            </Helmet>
            <Container maxW={'6xl'} my={4}>
                <Flex direction={"column"}>
                    <Navigation links={[
                        {
                            href: "/",
                            name: "Home"
                        },
                        {
                            href: "/berita",
                            name: "Berita"
                        },
                        {
                            href: "/berita-detail" + idBerita,
                            name: detailBerita?.title as string,
                        }
                    ]} />                
                </Flex>
                <VStack spacing={4} py={4}>
                    <Heading textAlign={'center'}>{detailBerita?.title}</Heading>
                    <Text fontSize={'xs'}>{new Date(detailBerita?.created_at as string).toLocaleDateString()}</Text>
                    <Image src={detailBerita?.image_url} sx={{ width: '100%', height: {"sm": '200px', "md": '600px'}, objectFit: 'cover' }} />
                    <Text dangerouslySetInnerHTML={{__html: detailBerita?.content as string}} />                
                    <DaftarKomentar urlSlug={idBerita} />
                </VStack>
            </Container>
        </>
    )
}