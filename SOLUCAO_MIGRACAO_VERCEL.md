# Solução para Problema de Migrações no Deploy Vercel

## Problema Identificado
O build na Vercel ficava preso na etapa de migrações do Payload CMS com a mensagem:
```
INFO: Reading migration files from /vercel/path0/src/migrations
? It looks like you've run Payload in dev mode, meaning you've dynamically pushed changes to your database.
```

## Solução Implementada

### 1. Configuração do Database Adapter
Modificamos o arquivo `src/payload.config.ts` para desabilitar o "push mode" em produção:

```typescript
db: postgresAdapter({
  pool: {
    connectionString: process.env.POSTGRES_URL || '',
  },
  // Desabilita push mode em produção pois o banco já está configurado externamente
  push: process.env.NODE_ENV !== 'production',
}),
```

### 2. Como Funciona
- **Desenvolvimento (`NODE_ENV !== 'production'`)**: `push: true` - O Payload automaticamente sincroniza mudanças no schema com o banco de dados
- **Produção (`NODE_ENV === 'production'`)**: `push: false` - O Payload não tenta modificar o schema do banco de dados

## Próximos Passos Necessários

### Para Deploy na Vercel
1. **Executar migrações manualmente no banco de produção** antes do primeiro deploy:
   ```bash
   # Conectar ao banco de produção e executar:
   npm run payload migrate
   ```

2. **Configurar variáveis de ambiente na Vercel**:
   - `NODE_ENV=production`
   - `POSTGRES_URL=<sua_connection_string_de_producao>`
   - Outras variáveis necessárias do arquivo `.env`

3. **Processo de deploy futuro**:
   - Quando houver mudanças no schema (novas coleções, campos, etc.)
   - Gerar migração: `npm run payload migrate:create`
   - Executar migração no banco de produção antes do deploy
   - Fazer deploy na Vercel

### Alternativas para Automação
1. **CI/CD Pipeline**: Configurar GitHub Actions para executar migrações automaticamente
2. **Vercel Build Command**: Modificar o comando de build para incluir migrações (se o banco permitir conexões durante o build)

## Benefícios da Solução
- ✅ Evita que o build trave nas migrações
- ✅ Mantém controle total sobre quando as migrações são executadas
- ✅ Previne modificações acidentais no banco de produção
- ✅ Permite desenvolvimento local normal com push mode

## Documentação de Referência
- [Payload CMS - Postgres Adapter](https://payloadcms.com/docs/database/postgres)
- [Payload CMS - Migrations](https://payloadcms.com/docs/database/migrations)