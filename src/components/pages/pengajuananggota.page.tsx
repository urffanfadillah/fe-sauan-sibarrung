import { FormControl, FormLabel, Input, Button, Container, SimpleGrid, Heading, Select } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PengajuanAnggota() {
    const {register, handleSubmit} = useForm();
    const [formData, setFormData] = useState({});

    let config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    }

    const onSubmit = (data: any) => {
        setFormData(data);
        axios.post(`${import.meta.env.VITE_ENDPOINT}pengajuan-anggota`, formData, config).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response);
        })
        // try{
        //     setFormData(data);
        //     axios.post(`${import.meta.env.VITE_ENDPOINT}pengajuan-anggota`, formData).then((response) => {
        //         console.log(response.data);
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        // }catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <Container maxW={'6xl'} display={'flex'} flexDirection={'column'} gap={6}>
            <Heading textAlign={'center'}>Formulir Pengajuan Anggota</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SimpleGrid columns={{base: 2, md: 4}} spacing={4} my={4}>
                    <FormControl>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <Input type='text' {...register("nama_lengkap")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Panggilan</FormLabel>
                        <Input type='text' {...register("nama_panggilan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No KTP</FormLabel>
                        <Input type='text' {...register("no_ktp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No NPWP</FormLabel>
                        <Input type='text' {...register("no_npwp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggal Lahir</FormLabel>
                        <Input type='date' {...register("tanggal_lahir")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <Select placeholder='Select option' {...register("jenis_kelamin")} name="jenis_kelamin" defaultValue={'option1'}>
                            <option value='option1'>Laki - Laki</option>
                            <option value='option2'>Perempuan</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Agama</FormLabel>
                        <Input type='text' {...register("agama")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status Pernikahan</FormLabel>
                            <Select placeholder='Select option' {...register("status_pernikahan")} name="status_pernikahan" defaultValue={'option1'}>
                                <option value='option1'>Belum Menikah</option>
                                <option value='option2'>Menikah</option>
                            </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pendidikan</FormLabel>
                        <Select placeholder='Select option' {...register("pendidikan")} name="pendidikan" defaultValue={'option1'}>
                            <option value='option1'>SD</option>
                            <option value='option2'>SMP</option>
                            <option value='option3'>SMA/K</option>
                            <option value='option4'>Kuliah</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Gelar</FormLabel>
                        <Select placeholder='Select option' {...register("gelar")} name="gelar" defaultValue={'option1'}>
                            <option value='option1'>Tidak Ada</option>
                            <option value='option2'>Sarjana</option>
                            <option value='option2'>Magister</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggungan</FormLabel>
                        <Input type='text' {...register("tanggungan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Suku</FormLabel>
                        <Input type='text' {...register("suku")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ibu</FormLabel>
                        <Input type='text' {...register("ibu")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP</FormLabel>
                        <Input type='text' {...register("no_hp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' {...register("email")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat KTP</FormLabel>
                        <Input type='text' {...register("alamat_ktp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Rumah</FormLabel>
                        <Input type='text' {...register("alamat_rumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Utama</FormLabel>
                        <Input type='text' {...register("pekerjaan_utama")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Sampingan</FormLabel>
                        <Input type='text' {...register("pekerjaan_sampingan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Penghasilan</FormLabel>
                        <Input type='text' {...register("penghasilan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Lama Bekerja</FormLabel>
                        <Input type='text' {...register("lama_bekerja")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 1</FormLabel>
                        <Input type='text' {...register("nama_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 1</FormLabel>
                        <Input type='text' {...register("hubungan_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 1</FormLabel>
                        <Input type='text' {...register("alamat_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 2</FormLabel>
                        <Input type='text' {...register("nama_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 2</FormLabel>
                        <Input type='text' {...register("hubungan_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 2</FormLabel>
                        <Input type='text' {...register("alamat_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 3</FormLabel>
                        <Input type='text' {...register("nama_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 3</FormLabel>
                        <Input type='text' {...register("hubungan_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 3</FormLabel>
                        <Input type='text' {...register("alamat_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Pasangan</FormLabel>
                        <Input type='text' {...register("nama_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tempat Lahir Pasangan</FormLabel>
                        <Input type='text' {...register("tempat_lahir_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggal Lahir Pasangan</FormLabel>
                        <Input type='date' {...register("tanggal_lahir_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No KTP Pasangan</FormLabel>
                        <Input type='text' {...register("no_ktp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat KTP Pasangan</FormLabel>
                        <Input type='text' {...register("alamat_ktp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Pasangan</FormLabel>
                        <Input type='text' {...register("pekerjaan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Pekerjaan Pasangan</FormLabel>
                        <Input type='text' {...register("alamat_pekerjaan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Pasangan</FormLabel>
                        <Input type='text' {...register("no_hp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Lama Bekerja Pasangan</FormLabel>
                        <Input type='text' {...register("lama_bekerja_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Penghasilan Pasangan</FormLabel>
                        <Input type='text' {...register("penghasilan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Keluarga Serumah</FormLabel>
                        <Input type='text' {...register("keluarga_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Keluarga</FormLabel>
                        <Input type='text' {...register("nama_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Keluarga</FormLabel>
                        <Input type='text' {...register("alamat_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Keluarga</FormLabel>
                        <Input type='text' {...register("no_hp_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Keluarga Tak Serumah</FormLabel>
                        <Input type='text' {...register("nama_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Keluarga Tak Serumah</FormLabel>
                        <Input type='text' {...register("alamat_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Keluarga Tak Serumah</FormLabel>
                        <Input type='text' {...register("no_hp_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Anggota CUSS</FormLabel>
                        <Input type='text' {...register("nama_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Anggota CUSS</FormLabel>
                        <Input type='text' {...register("alamat_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No BA Anggota CUSS</FormLabel>
                        <Input type='text' {...register("no_ba_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Anggota CUSS</FormLabel>
                        <Input type='text' {...register("no_hp_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Bangunan Dihuni</FormLabel>
                        <Input type='text' {...register("bangunan_dihuni")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Banugan Disewakan</FormLabel>
                        <Input type='text' {...register("bangunan_disewakan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekarangan Rumah</FormLabel>
                        <Input type='text' {...register("pekarangan_rumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Kebun</FormLabel>
                        <Input type='text' {...register("kebun")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sawah</FormLabel>
                        <Input type='text' {...register("sawah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabang CUSS</FormLabel>
                        <Input type='text' {...register("tabang_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabpas CUSS</FormLabel>
                        <Input type='text' {...register("tabpas_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabadt CUSS</FormLabel>
                        <Input type='text' {...register("tabadt_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Totsim CUSS</FormLabel>
                        <Input type='text' {...register("totsim_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabang KOP</FormLabel>
                        <Input type='text' {...register("tabang_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabpas KOP</FormLabel>
                        <Input type='text' {...register("tabpas_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabadt KOP</FormLabel>
                        <Input type='text' {...register("tabadt_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Totsim KOP</FormLabel>
                        <Input type='text' {...register("totsim_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabang Lain</FormLabel>
                        <Input type='text' {...register("tabang_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabpas Lain</FormLabel>
                        <Input type='text' {...register("tabpas_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabadt Lain</FormLabel>
                        <Input type='text' {...register("tabadt_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Totsim Lain</FormLabel>
                        <Input type='text' {...register("totsim_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Mobil</FormLabel>
                        <Input type='text' {...register("mobil")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Motor</FormLabel>
                        <Input type='text' {...register("motor")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sepeda</FormLabel>
                        <Input type='text' {...register("sepeda")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Furniture</FormLabel>
                        <Input type='text' {...register("furniture")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Elektronik</FormLabel>
                        <Input type='text' {...register("elektronik")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status Kepemilikan Tempat Tinggal</FormLabel>
                        <Input type='text' {...register("status_kepemilikan_tempat_tinggal")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sifat Bangunan Tempat Tinggal</FormLabel>
                        <Input type='text' {...register("lama_menempati_tempat_tinggal")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Foto</FormLabel>
                        <Input type='file' {...register("foto")} />
                    </FormControl>

                </SimpleGrid>
                <Button type='submit' colorScheme="messenger" my={4}>Kirim</Button>
            </form>
        </Container>
    )
}