import request from 'supertest'
import server from "./app"
import { Post } from './post'

describe('GET /hello', () => {
  it('should return 200 & valid response if request param list is empty', done => {
    request(server)
      .get('/posts')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        const posts = res.body.data as Post[]
        expect(res.body).toMatchObject({success: true})
        posts.forEach(post => {
            expect(post).toHaveProperty("id");
            expect(post).toHaveProperty("author");
            expect(post).toHaveProperty("title");
            expect(post).toHaveProperty("content");
            expect(post).toHaveProperty("category");
          });
        done()
      })
    })

  it('should return 200 & valid response if name param is set', done => {
    request(server)
      .get("/posts?search=dare&filter=lifestyle")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        const posts = res.body.data as Post[]
        expect(res.body).toMatchObject({success: true})
        posts.forEach(post => {
            expect(post).toHaveProperty("id");
            expect(post).toHaveProperty("author");
            expect(post).toHaveProperty("title");
            expect(post).toHaveProperty("content");
            expect(post).toHaveProperty("category");
          });
        done()
      })
  })
})