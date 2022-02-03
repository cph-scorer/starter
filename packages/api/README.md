# @cph-scorer/starter-api

![](https://img.shields.io/badge/NESTJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)

## Configuration :

| config       | description                  | default                                  |
| ------------ | ---------------------------- | ---------------------------------------- |
| NODE_ENV     | current running environement | DEV                                      |
| SWAGGER_PATH | path of swagger              | api                                      |
| PORT         | port of apps                 | 8000                                     |
| DATABASE_URL | url of DB                    | postgres://psql:psql@127.0.0.1:5432/psql |

## Script :

```bash
# build app
pnpm build

# format code (lint & prettier)
pnpm format

# start app
pnpm start

# start app on dev mode
pnpm start:dev

# start app on debug mode
pnpm start:debug

# start app was build
pnpm start:prod

# running test (need DB enable)
pnpm test
```

## Author

**Corentin Verquin**

- Github [@corentin-verquin](https://github.com/corentin-verquin)

## License

Copyright © `2022` `Corentin Verquin`.
This project is [MIT](https://opensource.org/licenses/MIT) licensed
