import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function AboutProfil() {
    return (
      <Container maxW={'6xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'orange.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('orange.50', 'orange.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Tentang Credit Union
            </Text>
            <Heading>CU SAUAN SIBARRUNG lembaga pemerdayaan</Heading>
            <Text color={'gray.600'} fontSize={'lg'}>
              Credit Union muncul dari keprihatinan terhadap kehidupan masyarakat kecil. Pada awal abad ke-19, terjadi musibah kelaparan dan musim dingin yang hebat yang melanda masyarakat Jerman. Para petani yang menggantungkan hidupnya dari hasil alam, kini tidak dapat menghadapi keadaan yang terjadi. Musim dingin yang hebat membuat persediaan makanan sangat terbatas. Hal tersebut menyebabkan  kehidupan masyarakat kecil semakin memprihatinkan.
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
        <Text color={'gray.600'} fontSize={'lg'} mt={10}>
          Dibalik semua masalah yang dihadapi oleh masyarakat pada waktu itu, dimana tuntutan kebutuhan hidup membuat mereka harus terlibat hutang dengan para “lintah darat ” atau rentenir. Rentenir-rentenir tersebut dengan sigap memanfaatkan keadaan tersebut. Para petani yang memerlukan uang terpaksa harus menggantungkan diri pada para lintah darat, mereka meminjam uang denga bunga yang sangat tinggi. Hal ini membuat para petani harus “gali lubang tutup lubang atau menutup hutang lama, lalu mencari hutang baru”. Keadaan tersebut semakin memperburuk keaadaan para petani, terlebih saat mereka harus merelakan harta bendanya diambil oleh para rentenir akibat tidak mampu membayar hutangnya.

          Kesulitan hidup yang para petani alami, membuat mereka berbondong-bondong ke kota untuk mengadu nasib. Di kota mereka mencari nafkah sebagai buruh kasar di pabrik-pabrik. Karna minimnya pendidikan, membuat mereka hanya diperas tenaga serta keringatnya tanpa gaji yang memadai. Itulah yang mengakibatkan terjadinya kesenjangan sosial antar buruh dan majikan. Majikan bertambah kaya, sedangkan para buruh hanya dijadikan sebagai sapi perah yang tidak pernah diperhatikan kesejahteraannya.

          Kesulitan yang dihadapi oleh para buruh pabrik semakin dipersulit dengan meletusnya “Revolusi Industri” pada pertengahan abad 19. Tenaga para buruh mulai digantikan denga mesin-mesin. Keadaan itu membuat para buruh menjadi tersinggkirkan sehingga angka pengangguran semakin bertambah. Para petani yang berangkat kekota menjadi buruh dengan tujuan memperbaiki taraf hidupnya, kini nasipnya lebih memprihatinkan dibanding rekan-rekan mereka yang masih bertahan di kampung.
        </Text>
      </Container>
    );
  }