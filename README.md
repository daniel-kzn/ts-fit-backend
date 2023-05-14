# ts-fit

API REST d'app web

## Stackdev :

- Nest : framework node
- Prisma : ORM node

- [argon2](https://www.npmjs.com/package/argon2) : package npm pour crypter
- [nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt) : génération & gestion de jwt
- [nestjs/config](https://docs.nestjs.com/techniques/configuration) : config env file

## Installation & Lancement

```bash
# Lance le container
docker compose up -d
# Run l'app
npm run start dev
# Si changement de la bdd
npx prisma migrate dev
```
