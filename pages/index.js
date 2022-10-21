import { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Card,
  Flex,
  Heading,
  Input,
  ThemeProvider,
  themes,
  Container,
} from '../ui'
import moment from 'moment'

export default function Tweets() {
  const defaultTheme = 'dark'
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  const date = new Date()
  const [post, setPost] = useState({ tweet: '', createdAt: date })

  function updateTweet(value) {
    return setPost((prev) => {
      return { ...prev, ...value }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newTweet = { ...post }

    await fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(newTweet),
    }).catch((error) => {
      window.alert(error)
      return
    })

    setPost({ tweet: '', createdAt: date })
  }

  function RenderTweet() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      const url = 'http://localhost:8000/posts'
      const fetchData = async () => {
        try {
          const response = await fetch(url)
          const json = await response.json()
          setPosts(json)
        } catch (error) {
          console.log('error', error)
        }
      }
      fetchData()
    }, [posts])

    return (
      <Card mb={4} ml={4} p={3}>
        {posts &&
          posts
            .slice()
            .reverse()
            .map((post) => (
              <>
                <Container mb={4} p={3}>
                  <Flex>
                    <Flex
                      sx={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Heading as='h2'>Sieg</Heading>
                      <Box as='time'>{moment(post.createdAt).fromNow()}</Box>
                    </Flex>
                  </Flex>
                  <Box
                    as='p'
                    sx={{
                      pt: 4,
                      pb: 4,
                    }}
                  >
                    {post.tweet}
                  </Box>
                </Container>
              </>
            ))}
      </Card>
    )
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex
        sx={{
          justifyContent: 'center',
          maxWidth: '850px',
          margin: '64px auto',
        }}
      >
        <Box sx={{ width: '33%' }}>
          <Card sx={{ p: 3 }}>
            <Heading as='h3'>Welcome back, Sieg!</Heading>
            <Box mt={4}>
              <Box
                as='form'
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Input
                  placeholder="What's happening? "
                  maxLength={200}
                  value={post.tweet}
                  onChange={(e) => updateTweet({ tweet: e.target.value })}
                  sx={{
                    height: '80px',
                  }}
                />
                <Button mt={2} type='submit' disabled={!post.tweet}>
                  Post
                </Button>
              </Box>
            </Box>

            <Heading as='h5' mt={4} mb={2}>
              Theme switcher
            </Heading>
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Button onClick={() => setCurrentTheme('modern')}>Modern</Button>
              <Button onClick={() => setCurrentTheme('nineties')} ml={2}>
                90s
              </Button>
              <Button onClick={() => setCurrentTheme('dark')} ml={2}>
                Dark
              </Button>
            </Flex>
          </Card>
        </Box>

        <Box sx={{ width: '66%' }}>{RenderTweet()}</Box>
      </Flex>
    </ThemeProvider>
  )
}
