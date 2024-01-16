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
        const message = res.body.message as Post[]
        expect(res.body).toMatchObject({success: true})
        message.forEach(data => {
            expect(data).toHaveProperty("id");
            expect(data).toHaveProperty("author");
            expect(data).toHaveProperty("title");
            expect(data).toHaveProperty("content");
            expect(data).toHaveProperty("category");
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
        const message = res.body.message as Post[]
        expect(res.body).toMatchObject({success: true})
        message.forEach(data => {
            expect(data).toHaveProperty("id");
            expect(data).toHaveProperty("author");
            expect(data).toHaveProperty("title");
            expect(data).toHaveProperty("content");
            expect(data).toHaveProperty("category");
          });
        done()
      })
  })
})