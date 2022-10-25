import { useState } from 'react'
import TweetForm from '../components/TweetForm'
import RenderTweet from '../components/RenderTweet'
import { Box, Flex, Card, ThemeProvider, themes, Heading, Button } from '../ui'

const Tweets = () => {
  const defaultTheme = 'dark'
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex
        sx={{
          justifyContent: 'center',
          // maxWidth: '850px',
          // margin: '64px auto',

          flexDirection: 'column',
          '@media screen and (min-width:640px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            marginBottom: '20px',

            '@media screen and (min-width:640px)': {
              width: '33%',
              padding: '10px',
              justifyContent: 'center',
            },
          }}
        >
          <Card sx={{ p: 3 }}>
            <TweetForm />
            <Box>
              <Heading as='h5' mt={4} mb={2}>
                Theme switcher
              </Heading>
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <Button
                  sx={{
                    width: '100px',
                    '@media screen and (min-width:640px)': {
                      width: '100%',
                      fontSize: '10px',
                    },
                  }}
                  onClick={() => setCurrentTheme('modern')}
                >
                  Modern
                </Button>
                <Button
                  sx={{
                    width: '100px',
                    '@media screen and (min-width:640px)': {
                      width: '100%',
                      fontSize: '10px',
                    },
                  }}
                  onClick={() => setCurrentTheme('nineties')}
                  ml={2}
                >
                  90s
                </Button>
                <Button
                  sx={{
                    width: '100px',
                    '@media screen and (min-width:640px)': {
                      width: '100%',
                      fontSize: '10px',
                    },
                  }}
                  onClick={() => setCurrentTheme('dark')}
                  ml={2}
                >
                  Dark
                </Button>
              </Flex>
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            width: '100%',
            '@media screen and (min-width:640px)': {
              width: '66%',
              padding: '10px',
            },
          }}
        >
          <RenderTweet />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}
export default Tweets
