# next-caching

Next-Caching demo site from Max's Next.js 15 course on Udemy 

https://www.udemy.com/course/nextjs-react-the-complete-guide


(Section 7)
Understanding & Configuring Caching

next will cache more aggressively in v14 than in v15
cache: force-cache (default in nextJS v14)
cache: no-store (default in nextJS v15)

we can use next: (instead of cache:)
and set revalidate (in example below we revalidate after 5 seconds)
(for example: if the user smashes the Refresh button on browser, it won't refresh...)

const response = await fetch("http://localhost:8080/messages", {
  next: {
    revalidate: 5,
  },
});

Start the Backend
```
cd /backend
npm install
npm start
```

Start the Frontend
```
npm install
npm run dev
```
