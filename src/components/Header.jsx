import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
  Center,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
  FaPhp,
  FaBullhorn,
  FaGit,
  FaDocker,
  FaWindows,
  FaMac,
} from 'react-icons/fa'
import {IoLogoElectron} from 'react-icons/io5'
import {SiMysql, SiHeroku, SiElectron} from 'react-icons/si'
import {ReactComponent as BurgerKingLogo} from '../logos/burger-king.svg'
import {ReactComponent as LuaLogo} from '../logos/Lua.svg'

import { SiMongodb } from 'react-icons/si'

import { VscTerminalPowershell } from 'react-icons/vsc'
import { MdWebAsset } from 'react-icons/md'
import IncoludidoLogo from '../logos/incoludido.png'
import BlasterLogo from '../logos/blaster.png'
import '../index.css'

const TecnologyIcon = ({name, icon, href=false}) => (
  <Link margin='0px 24px 40px 0px' className='tecnologyTitle' href={href} isExternal pointerEvents={!href}>
    <Icon w={24} h={24} as={icon} />
    <Text textAlign='center' fontSize='1.5rem'>{name}</Text>
  </Link>
)

const ProjectTag = ({name, icon}) => (
  <Tag size={'lg'} variant='outline' color='#009974' boxShadow={'inset 0 0 0px 1px #009974'}>
    <Icon w={6} h={6} as={icon} /><TagLabel> {name}</TagLabel>
  </Tag>
)

const Client = ({name, description, icon, tags = false, isPng= false, url=false}) => (
  <Flex color='white'>
  <Link href={url} isExternal>
    <Text padding='20px'>                
      {isPng ? <img width='100px' src={icon} alt="" /> : <Icon w={24} h={24} as={icon} />}
    </Text>
  </Link>

    <Box padding='10px' verticalAlign='middle' flex='1'>
      <Text 
        minHeight='100px' 
        background={useColorModeValue('gray.200', 'whiteAlpha.100')}
        color={useColorModeValue('black', 'gray.200')}
        paddingX="6"
        paddingY="3"
        marginY="3"
        borderRadius="lg"
        fontSize={'1.5rem'}  
      >
        {description}
      </Text>


      <HStack >
      { tags }
        
    </HStack>

    </Box>

    
  </Flex>
)

// fix


export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW="90ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            <Box w="36" marginX="auto">
              <Img
                borderRadius="full"
                src="https://avatars.githubusercontent.com/u/73359763?v=4"
              />
            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 26 }}
                alignItems="center"
                lineHeight="110%"
                fontFamily="mono"
              >
                Hey, I'm Marcelo Cornejo  <span className="wave"> 👋</span>
              </Heading>
            </Box>
            <Box alignItems="center">

            <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{ md: 'large' }}
                marginX="1"
                textAlign={'center'}
                boxSizing="content-box"
              >
               <span className="highlighted-word">Full-stack web developer</span>{' '}
                based in <span className="highlighted-word">Chile</span>.
              </Text>

              <br />

              <Stack as={Box} marginY="5" spacing="5">
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://github.com/elmarceloc" isExternal>
                    <Icon as={FiGithub} /> @elmarceloc
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://linkedin.com/in/elmarceloc" isExternal>
                    <Icon as={FiLinkedin} /> @elmarceloc
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="mailto:marcelo.cornejo.m@usach.cl" >
                    <Icon as={FiMail} /> marcelo.cornejo.m@usach.cl
                  </Link>
                </Text>
              </Stack>
            
             
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="solid"
                marginBottom="5"
                fontSize="1.2rem"
                padding={'0.5rem'}
                backgroundColor='#2d2d30'
              >
                stack
              </Badge>
              
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                <TecnologyIcon name='NodeJs' icon={FaNodeJs} href='https://platzi.com/p/marcelocornejomaldonado/curso/1759-fundamentos-node/diploma/detalle'/>
                <TecnologyIcon name='Python' icon={FaPython}/>
                <TecnologyIcon name='Javascript' icon={FaJs}/>
                <TecnologyIcon name='HTML5' icon={FaHtml5} href='https://platzi.com/p/marcelocornejomaldonado/curso/1758-html-practico/diploma/detalle'/>
                <TecnologyIcon name='CSS3' icon={FaCss3} href='https://platzi.com/p/marcelocornejomaldonado/curso/1758-html-practico/diploma/detalle'/>
                <TecnologyIcon name='VueJs' icon={FaVuejs} />
                <TecnologyIcon name='React' icon={FaReact} href='https://platzi.com/p/marcelocornejomaldonado/curso/2444-react/diploma/detalle'/>
                <TecnologyIcon name='PHP' icon={FaPhp} />
                <TecnologyIcon name='Electron' icon={IoLogoElectron} />
                <TecnologyIcon name='MySql' icon={SiMysql} />
                <TecnologyIcon name='MongoDB' icon={SiMongodb} />
                
              </Stack>

              <Badge
                as="a"
                variant="solid"
                marginBottom="5"
                fontSize="1.2rem"
                padding={'0.5rem'}
                backgroundColor='#2d2d30'
              >
                Tools
              </Badge>
              
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                <TecnologyIcon name='Git' icon={FaGit} />
                <TecnologyIcon name='Doker' icon={FaDocker} href='https://platzi.com/p/marcelocornejomaldonado/curso/2066-course/diploma/detalle' />
                <TecnologyIcon name='Heroku' icon={SiHeroku} />
                <TecnologyIcon name='SSH' icon={VscTerminalPowershell} />
              </Stack>



              <Box justifyContent="center">
              <Badge
                as="a"
                variant="solid"
                marginBottom="5"
                fontSize="1.2rem"
                padding={'0.5rem'}
                backgroundColor='#2d2d30'
              >
                Clients
              </Badge>
              
              <Client name='Burger King' description={
                <>
                  I worked in an award winning <Link isExternal href='https://www.behance.net/gallery/121607659/BURGER-KING-Bks-Virtual-HomeComing'>Advertisement Campaign</Link> for Burger King Chile.
                </>
                } 
                tags={
                  <>
                    <ProjectTag name='Marketing' icon={FaBullhorn} />
                    <ProjectTag name='Game scripting' icon={LuaLogo} />
                  </>
                }
                icon={BurgerKingLogo}
                url='https://www.burgerking.cl' />
              <Client name='Incoludido' description={
                <>
                Ad campaing for "Incoludido", one of the biggest Chilean toilet paper companies.
                </>
                }
                tags={
                  <>
                    <ProjectTag name='Marketing' icon={FaBullhorn} />
                    <ProjectTag name='Game scripting' icon={LuaLogo} />
                  </>
                }
                icon={IncoludidoLogo}
                isPng={true}
                url='https://incoludido.cl' />


            <Client name='Blaster Maker' description={
                <>
                Pixel art editor for creating hama beads patterns.
                </>
                }
                tags={
                  <>
                    <ProjectTag name='PC' icon={FaWindows} />
                    <ProjectTag name='Web' icon={MdWebAsset} />
                    <ProjectTag name='Electron' icon={SiElectron} />
                    <ProjectTag name='VueJs' icon={FaVuejs} />
                  </>
                }
                icon={BlasterLogo}
                isPng={true}
                url='https://www.blasterchile.cl/pages/blaster-maker' />

              </Box>

            </Box>
            
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
