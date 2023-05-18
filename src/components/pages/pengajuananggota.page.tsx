import { FormControl, FormLabel, Input, Button, Container, SimpleGrid, Heading, Select, Alert, AlertIcon, CloseButton } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function PengajuanAnggota() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    let config = {
        headers: {
            "content-type": "multipart/form-data",
        }
    }

    function onSubmit(data: any) {
        const formData = new FormData();
        formData.append('nama_lengkap', data.nama_lengkap);
        formData.append('nama_panggilan', data.nama_panggilan);
        formData.append('no_ktp', data.no_ktp);
        formData.append('npwp', data.npwp);
        formData.append('tempat_lahir', data.tempat_lahir);
        formData.append('tanggal_lahir', data.tanggal_lahir);
        formData.append('jenis_kelamin', data.jenis_kelamin);
        formData.append('agama', data.agama);
        formData.append('status_pernikahan', data.status_pernikahan);
        formData.append('pendidikan', data.pendidikan);
        formData.append('gelar', data.gelar);
        formData.append('tanggungan', data.tanggungan);
        formData.append('suku', data.suku);
        formData.append('ibu', data.ibu);
        formData.append('no_hp', data.no_hp);
        formData.append('email', data.email);
        formData.append('alamat_ktp', data.alamat_ktp);
        formData.append('alamat_rumah', data.alamat_rumah);
        formData.append('pekerjaan_utama', data.pekerjaan_utama);
        formData.append('pekerjaan_sampingan', data.pekerjaan_sampingan);
        formData.append('penghasilan', data.penghasilan);
        formData.append('lama_bekerja', data.lama_bekerja);
        formData.append('nama_ahli_waris_1', data.nama_ahli_waris_1);
        formData.append('hubungan_ahli_waris_1', data.hubungan_ahli_waris_1);
        formData.append('alamat_ahli_waris_1', data.alamat_ahli_waris_1);
        formData.append('nama_ahli_waris_2', data.nama_ahli_waris_2);
        formData.append('hubungan_ahli_waris_2', data.hubungan_ahli_waris_2);
        formData.append('alamat_ahli_waris_2', data.alamat_ahli_waris_2);
        formData.append('nama_ahli_waris_3', data.nama_ahli_waris_3);
        formData.append('hubungan_ahli_waris_3', data.hubungan_ahli_waris_3);
        formData.append('alamat_ahli_waris_3', data.alamat_ahli_waris_3);
        formData.append('nama_pasangan', data.nama_pasangan);
        formData.append('tempat_lahir_pasangan', data.tempat_lahir_pasangan);
        formData.append('tanggal_lahir_pasangan', data.tanggal_lahir_pasangan);
        formData.append('no_ktp_pasangan', data.no_ktp_pasangan);
        formData.append('alamat_ktp_pasangan', data.alamat_ktp_pasangan);
        formData.append('pekerjaan_pasangan', data.pekerjaan_pasangan);
        formData.append('alamat_pekerjaan_pasangan', data.alamat_pekerjaan_pasangan);
        formData.append('no_hp_pasangan', data.no_hp_pasangan);
        formData.append('lama_bekerja_pasangan', data.lama_bekerja_pasangan);
        formData.append('penghasilan_pasangan', data.penghasilan_pasangan);
        formData.append('keluarga_serumah', data.keluarga_serumah);
        formData.append('nama_keluarga', data.nama_keluarga);
        formData.append('alamat_keluarga', data.alamat_keluarga);
        formData.append('no_hp_keluarga', data.no_hp_keluarga);
        formData.append('nama_keluarga_tak_serumah', data.nama_keluarga_tak_serumah);
        formData.append('alamat_keluarga_tak_serumah', data.alamat_keluarga_tak_serumah);
        formData.append('no_hp_keluarga_tak_serumah', data.no_hp_keluarga_tak_serumah);
        formData.append('nama_anggota_cuss', data.nama_anggota_cuss);
        formData.append('alamat_anggota_cuss', data.alamat_anggota_cuss);
        formData.append('no_ba_anggota_cuss', data.no_ba_anggota_cuss);
        formData.append('no_hp_anggota_cuss', data.no_hp_anggota_cuss);
        formData.append('bangunan_dihuni', data.bangunan_dihuni);
        formData.append('bangunan_disewakan', data.bangunan_disewakan);
        formData.append('pekarangan_rumah', data.pekarangan_rumah);
        formData.append('kebun', data.kebun);
        formData.append('sawah', data.sawah);
        formData.append('tabang_cuss', data.tabang_cuss);
        formData.append('tabpas_cuss', data.tabpas_cuss);
        formData.append('tabadt_cuss', data.tabadt_cuss);
        formData.append('totsim_cuss', data.totsim_cuss);
        formData.append('tabang_bank', data.tabang_bank);
        formData.append('tabpas_bank', data.tabpas_bank);
        formData.append('tabadt_bank', data.tabadt_bank);
        formData.append('totsim_bank', data.totsim_bank);
        formData.append('tabang_kop', data.tabang_kop);
        formData.append('tabpas_kop', data.tabpas_kop);
        formData.append('tabadt_kop', data.tabadt_kop);
        formData.append('totsim_kop', data.totsim_kop);
        formData.append('tabang_lain', data.tabang_lain);
        formData.append('tabpas_lain', data.tabpas_lain);
        formData.append('tabadt_lain', data.tabadt_lain);
        formData.append('totsim_lain', data.totsim_lain);
        formData.append('mobil', data.mobil);
        formData.append('motor', data.motor);
        formData.append('sepeda', data.sepeda);
        formData.append('furniture', data.furniture);
        formData.append('elektronik', data.elektronik);
        formData.append('status_kepemilikan_tempat_tinggal', data.status_kepemilikan_tempat_tinggal);
        formData.append('lama_menempati_tempat_tinggal', data.lama_menempati_tempat_tinggal);
        formData.append('sifat_bangunan_tempat_tinggal', data.sifat_bangunan_tempat_tinggal);
        formData.append('foto', data.foto[0]);
        axios.post(`${import.meta.env.VITE_ENDPOINT}pengajuan-anggota`, formData, config).then((response) => {
            console.log(response.data);
            setAlert(true);
            localStorage.setItem('alert', 'Data pengajuan anggota baru berhasil disimpan');
            navigate(0);
        }).catch((error) => {
            console.log(error);
        });
    }

    function closeAlert() {
        setAlert(false);
        localStorage.removeItem("alert");
        navigate(0);
    }

    const [alert, setAlert] = useState(false);
    
    return (
        <Container maxW={'6xl'} display={'flex'} flexDirection={'column'} gap={6}>
            <Heading textAlign={'center'}>Formulir Pengajuan Anggota</Heading>
            {
                alert || localStorage.getItem("alert") && (
                    <Alert status='success'>
                        <AlertIcon />
                        {
                            localStorage.getItem("alert")
                        }
                        <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-1}
                            top={-1}
                            onClick={closeAlert}
                            marginLeft={'auto'}
                        />
                    </Alert>
                )
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <SimpleGrid columns={{base: 1, md: 4}} spacing={4} my={4}>
                    <FormControl>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <Input type='text' {...register("nama_lengkap")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Panggilan</FormLabel>
                        <Input type='text' {...register("nama_panggilan")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No KTP</FormLabel>
                        <Input type='text' {...register("no_ktp")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No NPWP</FormLabel>
                        <Input type='text' {...register("npwp")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tempat Lahir</FormLabel>
                        <Input type='text' {...register("tempat_lahir")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggal Lahir</FormLabel>
                        <Input type='date' {...register("tanggal_lahir")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <Select placeholder='Select option' {...register("jenis_kelamin")} name="jenis_kelamin" defaultValue={'Laki - Laki'}>
                            <option value='Laki - Laki'>Laki - Laki</option>
                            <option value='Perempuan'>Perempuan</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Agama</FormLabel>
                        <Input type='text' {...register("agama")} required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status Pernikahan</FormLabel>
                            <Select placeholder='Select option' {...register("status_pernikahan")} name="status_pernikahan" defaultValue={'Belum Menikah'}>
                                <option value='Belum Menikah'>Belum Menikah</option>
                                <option value='Menikah'>Menikah</option>
                            </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pendidikan</FormLabel>
                        <Select placeholder='Select option' {...register("pendidikan")} name="pendidikan" defaultValue={'SD'}>
                            <option value='SD'>SD</option>
                            <option value='SMP'>SMP</option>
                            <option value='SMA/K'>SMA/K</option>
                            <option value='Kuliah'>Kuliah</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Gelar</FormLabel>
                        <Select placeholder='Select option' {...register("gelar")} name="gelar" defaultValue={'Tidak Ada'}>
                            <option value='Tidak Ada'>Tidak Ada</option>
                            <option value='Sarjana'>Sarjana</option>
                            <option value='Magister'>Magister</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggungan</FormLabel>
                        <Input type='text' required {...register("tanggungan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Suku</FormLabel>
                        <Input type='text' required {...register("suku")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ibu</FormLabel>
                        <Input type='text' required {...register("ibu")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP</FormLabel>
                        <Input type='text' required {...register("no_hp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' required {...register("email")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat KTP</FormLabel>
                        <Input type='text' required {...register("alamat_ktp")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Rumah</FormLabel>
                        <Input type='text' required {...register("alamat_rumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Utama</FormLabel>
                        <Input type='text' required {...register("pekerjaan_utama")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Sampingan</FormLabel>
                        <Input type='text' required {...register("pekerjaan_sampingan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Penghasilan</FormLabel>
                        <Input type='text' required {...register("penghasilan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Lama Bekerja</FormLabel>
                        <Input type='text' required {...register("lama_bekerja")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 1</FormLabel>
                        <Input type='text' required {...register("nama_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 1</FormLabel>
                        <Input type='text' required {...register("hubungan_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 1</FormLabel>
                        <Input type='text' required {...register("alamat_ahli_waris_1")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 2</FormLabel>
                        <Input type='text' required {...register("nama_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 2</FormLabel>
                        <Input type='text' required {...register("hubungan_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 2</FormLabel>
                        <Input type='text' required {...register("alamat_ahli_waris_2")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Ahli Waris 3</FormLabel>
                        <Input type='text' required {...register("nama_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Hubungan Waris 3</FormLabel>
                        <Input type='text' required {...register("hubungan_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Waris 3</FormLabel>
                        <Input type='text' required {...register("alamat_ahli_waris_3")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Pasangan</FormLabel>
                        <Input type='text' required {...register("nama_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tempat Lahir Pasangan</FormLabel>
                        <Input type='text' required {...register("tempat_lahir_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tanggal Lahir Pasangan</FormLabel>
                        <Input type='date' {...register("tanggal_lahir_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No KTP Pasangan</FormLabel>
                        <Input type='text' required {...register("no_ktp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat KTP Pasangan</FormLabel>
                        <Input type='text' required {...register("alamat_ktp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekerjaan Pasangan</FormLabel>
                        <Input type='text' required {...register("pekerjaan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Pekerjaan Pasangan</FormLabel>
                        <Input type='text' required {...register("alamat_pekerjaan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Pasangan</FormLabel>
                        <Input type='text' required {...register("no_hp_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Lama Bekerja Pasangan</FormLabel>
                        <Input type='text' required {...register("lama_bekerja_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Penghasilan Pasangan</FormLabel>
                        <Input type='text' required {...register("penghasilan_pasangan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Keluarga Serumah</FormLabel>
                        <Input type='text' required {...register("keluarga_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Keluarga</FormLabel>
                        <Input type='text' required {...register("nama_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Keluarga</FormLabel>
                        <Input type='text' required {...register("alamat_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Keluarga</FormLabel>
                        <Input type='text' required {...register("no_hp_keluarga")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Keluarga Tak Serumah</FormLabel>
                        <Input type='text' required {...register("nama_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Keluarga Tak Serumah</FormLabel>
                        <Input type='text' required {...register("alamat_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Keluarga Tak Serumah</FormLabel>
                        <Input type='text' required {...register("no_hp_keluarga_tak_serumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nama Anggota CUSS</FormLabel>
                        <Input type='text' required {...register("nama_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alamat Anggota CUSS</FormLabel>
                        <Input type='text' required {...register("alamat_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No BA Anggota CUSS</FormLabel>
                        <Input type='text' required {...register("no_ba_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>No HP Anggota CUSS</FormLabel>
                        <Input type='text' required {...register("no_hp_anggota_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Bangunan Dihuni</FormLabel>
                        <Input type='text' required {...register("bangunan_dihuni")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Banugan Disewakan</FormLabel>
                        <Input type='text' required {...register("bangunan_disewakan")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pekarangan Rumah</FormLabel>
                        <Input type='text' required {...register("pekarangan_rumah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Kebun</FormLabel>
                        <Input type='text' required {...register("kebun")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sawah</FormLabel>
                        <Input type='text' required {...register("sawah")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anggota CUSS</FormLabel>
                        <Input type='text' required {...register("tabang_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan pasangan CUSS</FormLabel>
                        <Input type='text' required {...register("tabpas_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anak dalam tanggungan CUSS</FormLabel>
                        <Input type='text' required {...register("tabadt_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Total simpanan CUSS</FormLabel>
                        <Input type='text' required {...register("totsim_cuss")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anggota Bank</FormLabel>
                        <Input type='text' required {...register("tabang_bank")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan pasangan Bank</FormLabel>
                        <Input type='text' required {...register("tabpas_bank")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anak dalam tanggungan Bank</FormLabel>
                        <Input type='text' required {...register("tabadt_bank")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Total simpanan Bank</FormLabel>
                        <Input type='text' required {...register("totsim_bank")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anggota Koperasi</FormLabel>
                        <Input type='text' required {...register("tabang_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan pasangan Koperasi</FormLabel>
                        <Input type='text' required {...register("tabpas_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anak dalam tanggungan Koperasi</FormLabel>
                        <Input type='text' required {...register("tabadt_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Total simpanan Koperasi</FormLabel>
                        <Input type='text' required {...register("totsim_kop")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan  tempat lain</FormLabel>
                        <Input type='text' required {...register("tabang_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan pasangan tempat lain</FormLabel>
                        <Input type='text' required {...register("tabpas_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Tabungan anak dalam tanggungan tempat lain</FormLabel>
                        <Input type='text' required {...register("tabadt_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Total simpanan tempat lain</FormLabel>
                        <Input type='text' required {...register("totsim_lain")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Mobil</FormLabel>
                        <Input type='text' required {...register("mobil")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Motor</FormLabel>
                        <Input type='text' required {...register("motor")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sepeda</FormLabel>
                        <Input type='text' required {...register("sepeda")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Furniture</FormLabel>
                        <Input type='text' required {...register("furniture")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Elektronik</FormLabel>
                        <Input type='text' required {...register("elektronik")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status Kepemilikan Tempat Tinggal</FormLabel>
                        <Input type='text' required {...register("status_kepemilikan_tempat_tinggal")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Lama Menempati Tempat Tinggal</FormLabel>
                        <Input type='text' required {...register("lama_menempati_tempat_tinggal")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sifat Bangunan Tempat Tinggal</FormLabel>
                        <Input type='text' required {...register("sifat_bangunan_tempat_tinggal")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Foto</FormLabel>
                        <input type="file" {...register("foto")} required />
                    </FormControl>

                </SimpleGrid>
                <Button type='submit' colorScheme="messenger" my={4}>Kirim</Button>
            </form>
        </Container>
    )
}