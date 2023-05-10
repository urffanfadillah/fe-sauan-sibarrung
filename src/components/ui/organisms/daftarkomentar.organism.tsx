import { Container, Card, CardHeader, Box, Stack, Heading, CardBody, StackDivider, Text, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface listKomentarType {
    nama: string;
    content: string;
}

export default function DaftarKomentar(props: any) {
    const [listKomentar, setListKomentar] = useState<listKomentarType[]>([]);
    const [urlSlug, setUrlSlug] = useState(props.urlSlug);
    const toast = useToast();
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    const {register, handleSubmit, setValue} = useForm();

    function onSubmit(data: any) {
        setValue("reply_to", null);
        axios.post(`${import.meta.env.VITE_ENDPOINT}komen`, data).then((response) => {
            console.log(response.data);
            toast({
                title: 'Berhasil buat komentar.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setInterval(() => {
                refreshPage()
            }, 5000);
        });
    }

    useEffect(() => {
        setUrlSlug(urlSlug);
        setValue("slug", urlSlug);
        axios.get(`${import.meta.env.VITE_ENDPOINT}komen/${urlSlug}`).then((response) => {
            setListKomentar(response.data.data.parent);
        });
    }, []);

    return (
        <Container maxW={'6xl'}>
            <Card>
                <CardHeader>
                    <Heading size='md'>Komentar ({listKomentar.length})</Heading>
                </CardHeader>

                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '6' }}>
                        <FormControl my={2}>
                            <FormLabel>Nama Anda</FormLabel>
                            <Input type='text' {...register("nama")} />
                        </FormControl>
                        <FormControl my={2}>
                            <FormLabel>Isi Komentar</FormLabel>
                            <Input type='text' {...register("content")} />
                        </FormControl>
                        <Button type="submit" colorScheme="messenger" my={2}>Kirim</Button>
                    </form>
                    <Stack divider={<StackDivider />} spacing='4' mt={8}>
                        {
                            listKomentar.map((result, index) => 
                                <Box key={index}>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {result.nama}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {result.content}
                                    </Text>
                                </Box>
                            )
                        }
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}