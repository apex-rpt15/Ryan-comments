# ryan-comments

> Comment section microservice of a clone of the soundcloud song page.  Pulls data from the music player microservice, which owns the user information displayed in the comments.

## Related Projects
  Proxy Server:
  - https://github.com/apex-rpt15/ryan-proxy

  Microservices:
  - https://github.com/apex-15/ryan-comments
  - https://github.com/apex-rpt15/alastair-track-player
  - https://github.com/apex-rpt15/zack-music-player

## Usage

> to start with docker: docker-compose up --build -d
Note: this will also seed the database with the seed script

> to seed the database: npm run seed-db
> to start server locally: npm run server-start
> to start babel/webpack: npm run react-dev

>Note: There is currently a get request to the ec2 instance in App.jsx.  This may need to get changed if the instance is terminated.
