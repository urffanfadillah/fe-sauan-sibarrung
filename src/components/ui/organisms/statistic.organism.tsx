import {
    Box,
    chakra,
    Flex,
    Image,
    SimpleGrid,
    Stat,
    StatNumber,
    Text,
    useColorModeValue,
    useDimensions,
  } from '@chakra-ui/react';
import axios from 'axios';
  import { useEffect, useState, useRef  } from 'react';      

  import iconAsset from "../../../assets/images/Asset WEB/Data statistik/Aset.png";
  import iconAnggota from "../../../assets/images/Asset WEB/Data statistik/anggota.png";
  import iconManajemen from "../../../assets/images/Asset WEB/Data statistik/Manajemen.png";
  import iconAktivis from "../../../assets/images/Asset WEB/Data statistik/aktivis.png";
  import ScrollTrigger from 'react-scroll-trigger/types';
  import CountUp from 'react-countup';
  
  interface StatsCardProps {
    title: string;    
    icon: string;
    text: string;
  }

  interface statType {
    anggota: string;
    aset: string;
    manajemen: string;
    aktivis: string;
    text: string;
  }

  function StatsCard(props: StatsCardProps) {
    const { title, icon, text } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          <Image src={icon} height={12} mb={'2'} />
          <Box pl={{ base: 2, md: 4 }}>
            <StatNumber fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'}>
              {/* {title} */}
              <CountUp end={parseInt(title)} duration={12} />
            </StatNumber>
            <Text textAlign={'center'} fontSize={'lg'}>{text}</Text>
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
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={stat?.anggota as string}
            icon={iconAnggota}
            text={"Anggota"}
          />
          <StatsCard
            title={stat?.aset as string}
            icon={iconAsset}
            text={"Aset"}
          />
          <StatsCard
            title={stat?.manajemen as string}
            icon={iconManajemen}
            text={"Manajemen"}
          />
          <StatsCard
            title={stat?.aktivis as string}
            icon={iconAktivis}
            text={"Aktivis"}
          />
        </SimpleGrid>
      </Box>
    );
  }