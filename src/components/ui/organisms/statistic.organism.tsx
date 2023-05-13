import {
    Box,
    chakra,
    Flex,
    Image,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
  import { ReactNode, useEffect, useState } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';

  import iconAsset from "../../../assets/images/Asset WEB/Data statistik/Aset.png";
  import iconAnggota from "../../../assets/images/Asset WEB/Data statistik/anggota.png";
  import iconManajemen from "../../../assets/images/Asset WEB/Data statistik/Manajemen.png";
  import iconAktivis from "../../../assets/images/Asset WEB/Data statistik/aktivis.png";
  
  interface StatsCardProps {
    title: string;    
    icon: string;
  }

  interface statType {
    anggota: string;
    aset: string;
    manajemen: string;
    aktivis: string;
  }

  function StatsCard(props: StatsCardProps) {
    const { title, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          {/* <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box> */}
          <Image src={icon} width={12} height={12} />
          <Box pl={{ base: 2, md: 4 }}>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {title}
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    const [stat, setStat] = useState<statType>();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}statistik`).then((response) => {
            setStat(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
      <Box maxW="6xl" mx={'auto'} py={5} px={4} my={12}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Data Statistik
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={stat?.anggota as string}
            icon={iconAnggota}
          />
          <StatsCard
            title={stat?.aset as string}
            icon={iconAsset}
          />
          <StatsCard
            title={stat?.manajemen as string}
            icon={iconManajemen}
          />
          <StatsCard
            title={stat?.aktivis as string}
            icon={iconAktivis}
          />
        </SimpleGrid>
      </Box>
    );
  }