import { Container, Grid, GridItem, FormControl, FormLabel, Input, Button, FormHelperText, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Heading, Flex, Select } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface tabelAngsuranType {
    nama_bulan: string;
    angsuran: number;
    pokok: number;
    bunga: number;
    outstanding: number;
}

export default function Kalkulator() {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [tabelAngsuran, setTabelAngsuran] = useState<tabelAngsuranType[]>([]);
    const [tipe, setTipe] = useState('');

    function onSubmit(data: any) {
        axios.post(`${import.meta.env.VITE_ENDPOINT}simulasi-kredit/${tipe}`, data).then((response) => {
            setTabelAngsuran(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Container maxW={'6xl'} my={4}>
            <Grid                
                templateRows='repeat(1, 1fr)'
                templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)'}}
                gap={4}
            >
                <GridItem colSpan={{base:1, md:2}}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                        <FormControl>
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
                        </FormControl>
                        <Button colorScheme="messenger" type="submit" isDisabled={tipe == "" && true}>Hitung</Button>
                    </form>
                </GridItem>
                {
                    tabelAngsuran.length > 0 ? (
                        <GridItem colSpan={{base:1, md:3}}>
                            <Heading size={'md'} textAlign={'center'}>Tabel angsuran {tipe}</Heading>
                            <TableContainer>
                                <Table variant='striped' colorScheme='orange'>
                                    <TableCaption>Perhitungan ini sifatnya simulasi belaka. Untuk lebih jelasnya silakan hubungi pemberi kredit.</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Bulan Ke</Th>
                                            <Th>Angsuran</Th>
                                            <Th>Pokok</Th>
                                            <Th>Bunga</Th>
                                            <Th>Outstanding</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            tabelAngsuran.map((result) =>
                                                <Tr>
                                                    <Td>{result.nama_bulan}</Td>
                                                    <Td>{result.angsuran}</Td>
                                                    <Td>{result.pokok}</Td>
                                                    <Td>{result.bunga}</Td>
                                                    <Td>{result.outstanding}</Td>
                                                </Tr>
                                            )
                                        }
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>Bulan Ke</Th>
                                            <Th>Angsuran</Th>
                                            <Th>Pokok</Th>
                                            <Th>Bunga</Th>
                                            <Th>Outstanding</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </GridItem>
                    ) : (                        
                        <Heading size={'md'} textAlign={'center'} width={'fit-content'} isTruncated>Silahkan isi form data pinjaman</Heading>
                    )
                }
            </Grid>
        </Container>
    )
}