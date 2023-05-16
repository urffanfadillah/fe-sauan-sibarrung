import { Container, FormControl, FormLabel, Input, Button, Heading, Select, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function Kontak() {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const toast = useToast();
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }

    function onSubmit(data: any) {
        axios.post(`${import.meta.env.VITE_ENDPOINT}kontak`, data).then((response) => {
            console.log(response.data)
            toast({
                title: 'Berhasil',
                description: "Anda sudah mengirimkan kontak",
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            setInterval(() => {
                refreshPage()
            }, 3000);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Container maxW={'6xl'}>
            <Heading size={'xl'} textAlign={'center'}>Kontak</Heading>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <FormControl>
                    <FormLabel>Nama</FormLabel>
                    <Input type='text' {...register("nama")} required />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' {...register("email")} required />
                </FormControl>
                <FormControl>
                    <FormLabel>Negara</FormLabel>
                    <Input type='text' {...register("negara")} required />
                </FormControl>
                <FormControl>
                    <FormLabel>Asal Info</FormLabel>
                        <Select placeholder='Select option' {...register("asal_info")} name="asal_info" defaultValue={'Sosial Media'}>
                            <option value='Sosial Media'>Sosial Media</option>
                            <option value='Teman'>Teman</option>
                            <option value='TV atau Radio'>TV atau Radio</option>
                            <option value='Koran'>Koran</option>
                            <option value='Dll'>Dll</option>
                        </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Pesan</FormLabel>
                    <Textarea {...register("pesan")} />
                </FormControl>
                {/* <FormControl>
                    <FormLabel>Jenis Pinjaman</FormLabel>
                    <Select placeholder='Select option' name="jenis_kelamin" onChange={(e) => setTipe(e.target.value)} >
                        <option value='tetap'>Tetap</option>
                        <option value='menurun'>Menurun</option>
                    </Select>                            
                </FormControl>
                <FormControl>
                    <FormLabel>Tenor (Bulan)</FormLabel>
                    <Input type='number' {...register("tenor", { min: 1, max: 120 })} required />
                    { errors.tenor && <FormHelperText color={'red.500'}>Tenor yang anda masukkan tidak valid, maksimal tenor: 120</FormHelperText> }
                </FormControl>
                <FormControl>
                    <FormLabel>Pinjaman (Rp)</FormLabel>
                    <Input type='number' {...register("pinjaman")} required />
                </FormControl>
                <FormControl>
                    <FormLabel>Suku Bunga (%)</FormLabel>
                    <Input type='text' {...register("suku_bunga")} required/>
                </FormControl> */}
                <Button colorScheme="messenger" type="submit">Kirim</Button>
            </form>
        </Container>
    )
}