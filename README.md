# ryan-comments

> Comment section of fakesoundcloud, a clone of the soundcloud song page

## Related Projects

  - https://github.com/apex-15/ryan-comments
  - https://github.com/apex-rpt15/alastair-track-player
  - https://github.com/apex-rpt15/zack-music-player
  - https://github.com/apex-rpt15/abraham-relatedSongs

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> to start with docker: docker-compose up --build -d
Note: this will also seed the database with the seed script

> to seed the database: npm run seed-db
> to start server locally: npm run server-start
> to start babel/webpack: npm run react-dev

>Note: There is currently a get request to the running ec2 instance in App.jsx.  This will need to get removed or changed for further development.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
