import { Box, Flex, Text, IconButton, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, } from '@chakra-ui/icons';

import headerBackground from '../../../assets/images/header_new.png';
import logoCU from '../../../assets/images/Logo_CU.png';
import { navItemType } from '../../../hooks/interfaces/navitem.interface';

import iconHome from "../../../assets/images/Asset WEB/home.png";
import iconProfile from "../../../assets/images/Asset WEB/Profile.png";
import iconKaisungan from "../../../assets/images/Asset WEB/kaisungan.png";
import iconProduk from "../../../assets/images/Asset WEB/produk & pelayanan.png";
import iconKubn from "../../../assets/images/Asset WEB/KUBn atau Kelompok Binaan.png";
import iconAnggota from "../../../assets/images/Asset WEB/menjadi anggota.png";
import iconNews from "../../../assets/images/Asset WEB/cu news.png";
import iconKalkulator from "../../../assets/images/Asset WEB/kalkulator.png";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        backgroundImage={`url(${headerBackground})`}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        objectFit={"cover"}
        width={'100%'}
        h={16}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'start'}
        ps={24}
      >
        <Image src={logoCU} w={10} h={10} />
      </Box>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}          
          align={'center'}
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex display={{ base: 'block', md: 'none' }} justifyContent={'center'} alignItems={'center'}>
            <Image src={logoCU} w={8} h={8} />
            <Text>CU Sauan Sibarrung</Text>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>        
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex direction={'row'} justifyContent={"center"} alignItems={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                px={2}                
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                <Flex mx={6} alignItems={'center'} justifyContent={'center'} gap={2}>
                  <Image src={navItem.icon} w={4} h={4} />
                  {navItem.label}
                </Flex>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                px={2}
                py={1}
                rounded={'xl'}
                w={"fit-content"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>        
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: navItemType) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={1.5}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'gray.400' }}
            fontWeight={500}
            fontSize={14}
          >
            {label}            
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, icon, children, href }: navItemType) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        {/* <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text> */}
        <Flex mx={6} alignItems={'center'} justifyContent={'center'} gap={2}>        
          <Image src={icon} w={4} h={4} />
          {label}
        </Flex>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS: Array<navItemType> = [
  {
    label: 'Home',
    href: '/',
    icon: iconHome
  },
  {
    label: 'Profile',
    icon: iconProfile,
    children: [
      {
        label: 'Visi, Misi, Nilai Nilai Inti',
        href: '/visi-misi',
      },
      {
        label: 'Struktur',
        href: '/struktur-organisasi',
      },
      {
        label: 'About Credit Union',
        href: '/about-cu',
      },
      {
        label: 'About Credit Union Sauan Sibarrung',
        href: '/about-cuss',
      },
      {
        label: 'History of CU Sauan Sibarrung',
        href: '/history-cuss',
      },
      {
        label: 'Profil Pengurus & Pengawas',
        href: '/profil-pengurus',
      },
    ],    
  },
  {
    label: 'Kaisungan',
    href: '/kaisungan',
    icon: iconKaisungan
  },
  {
    label: 'Produk & Pelayanan',
    icon: iconProduk,
    children: [
      {
        label: "Produk Simpanan",
        href: "/produk-simpanan",
      },
      {
        label: "Pelayanan Pinjaman",
        href: "/pelayanan-pinjaman",
      },
    ],
  },
  {
    label: 'Kelompok Binaan',
    icon: iconKubn,
    children: [
      {
        label: "Latar Belakang",
        href: "/latar-komunitas",
      },
      {
        label: "Komunitas",
        href: "/komunitas",
      },
    ],
  },
  {
    label: 'Menjadi Anggota',
    icon: iconAnggota,
    children: [
      {
        label: "Cara Menjadi Anggota",
        href: "/cara-menjadi-anggota",
      },
      {
        label: "Pemohonan Menjadi Anggota",
        href: "/pengajuan-anggota",
      },
    ],
  },
  {
    label: 'CU News',
    icon: iconNews,
    children: [
      {
        label: "Berita",
        href: "/cu-news",
      },
      {
        label: "Kisah Sukses",
        href: "/kisah-sukses",
      },
    ],
  },
  {
    label: 'Kalkulator',
    icon: iconKalkulator,
    children: [
      {
        label: "Kalkulator Kredit dengan Bunga Menurun",
        href: "/kalkulator",
      },
      {
        label: "Kalkulator Kredit dengan Setoran Tetap",
        href: "/kalkulator",
      },
    ],
  },
];