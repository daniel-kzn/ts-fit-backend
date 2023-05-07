# ts-fit

API REST d'app web

## Stackdev :

- Nest : framework node
- Prisma : ORM node

- Argon : package npm pour crypter
- nest-jwt : génération & gestion de jwt
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
