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
  import { useInView } from 'react-intersection-observer';
  import CountUp from 'react-countup';
  
  interface StatsCardProps {
    title: string;    
    icon: string;
    text: string;
  }

  interface statType {
    anggota_str: string;
    anggota_val: string;
    aset_str: string;
    aset_val: string;
    manajemen_str: string;
    manajemen_val: string;
    aktivis_str: string;
    aktivis_val: string;
    text: string;
  }

  function StatsCard(props: StatsCardProps) {
    const { title, icon, text } = props;
    const [ref, inView] = useInView();
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
          <Box pl={{ base: 2, md: 4 }} ref={ref}>
            {
              inView && (
                <StatNumber fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'}>
                  <CountUp end={parseInt(title)} duration={12} />
                </StatNumber>
              )
            }
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
            title={stat?.anggota_val as string}
            icon={iconAnggota}
            text={stat?.anggota_str as string}
          />
          <StatsCard
            title={stat?.aset_val as string}
            icon={iconAsset}
            text={stat?.aset_str as string}
          />
          <StatsCard
            title={stat?.manajemen_val as string}
            icon={iconManajemen}
            text={stat?.manajemen_str as string}
          />
          <StatsCard
            title={stat?.aktivis_val as string}
            icon={iconAktivis}
            text={stat?.aktivis_str as string}
          />
        </SimpleGrid>
      </Box>
    );
  }