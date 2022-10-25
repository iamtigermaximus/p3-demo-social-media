import { useState, useEffect } from 'react'
import { Box, Card, Flex, Heading, Container } from '../ui'
import moment from 'moment'

const RenderTweet = () => {
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
    <Card p={4} m={1}>
      {posts &&
        posts
          .slice()
          .reverse()
          .map((post) => (
            <Container mb={4} p={3} key={post.id}>
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
          ))}
    </Card>
  )
}

export default RenderTweet
