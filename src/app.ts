import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { posts } from "./post";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
    let allPosts = posts
    const { search, filter } =  req.query;
    if(filter){
        allPosts = posts.filter(post => post.category === filter )
    }
    if(search){
        allPosts = posts.filter((post) => {
            if(post.author.toLowerCase().includes(search as string) || 
                post.title.toLowerCase().includes(search as string)  || 
                post.content.toLowerCase().includes(search as string)
            ){
                return true
            } else {
                return false
            }
        })
    }
    
    res.status(200).send({ success: true, data: allPosts  });
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});

export default app; 