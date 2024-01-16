export const posts: Post[] = [
    {
        id: 1,
        author: "daniel alabi",
        title: "school",
        category: "education",
        content: "this is about school"
    },
    {
        id: 2,
        author: "peter karl",
        title: "church",
        category: "religion",
        content: "church is a good place"
    },
    {
        id: 3,
        author: "hilary paul",
        category: "education",
        title: "art",
        content: "register for school of art"
    },
    {
        id: 4,
        author: "david tinuke",
        category: "lifestyle",
        title: "fun",
        content: "party is fun"
    },
    {
        id: 5,
        author: "sam soul",
        category: "lifestyle",
        title: "video",
        content: "on a video link"
    },
    {
        id: 6,
        author: "vera carl",
        category: "lifestyle",
        title: "ship",
        content: "the ship is anchored"
    },
    {
        id: 7,
        author: "racheal pole",
        category: "religion",
        title: "muslim",
        content: "islam is also a religion"
    },
    {
        id: 8,
        author: "wale ade",
        title: "drink",
        category: "lifestyle",
        content: "what does it taste like"
    },
    {
        id: 9,
        author: "dare femi",
        title: "branding",
        category: "lifestyle",
        content: "branding is for everything"
    },
    {
        id: 10,
        author: "samuel john",
        category: "education",
        title: "tech",
        content: "register for altschool"
    }
]

export interface Post {
    id: number
    author: string 
    category:string
    title: string
    content: string
}