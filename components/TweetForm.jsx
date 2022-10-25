import { useState } from 'react'
import { Button, Box, Heading, Textarea } from '../ui'

const TweetForm = () => {
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
  return (
    <>
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
          <Textarea
            placeholder="What's happening? "
            maxLength={200}
            value={post.tweet}
            onChange={(e) => updateTweet({ tweet: e.target.value })}
            cols='30'
            rows='5'
          />
          <Button mt={2} type='submit' disabled={!post.tweet}>
            Post
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TweetForm
