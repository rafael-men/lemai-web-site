# Configuração dos Subdomínios

## 1. Configuração DNS

No seu provedor de DNS (onde está registrado lemaisolucoes.com.br), adicione:

### Para CRM:
**Registro CNAME:**
- **Nome:** crm
- **Valor:** cname.vercel-dns.com
- **TTL:** 300 (ou automático)

### Para Agenda:
**Registro CNAME:**
- **Nome:** agenda
- **Valor:** cname.vercel-dns.com
- **TTL:** 300 (ou automático)

### Ou Registros A (alternativo):
- **Nome:** crm
- **Valor:** 76.76.19.61 (IP do Vercel)
- **TTL:** 300

- **Nome:** agenda
- **Valor:** 76.76.19.61 (IP do Vercel)
- **TTL:** 300

## 2. Configuração no Vercel

1. Acesse seu projeto no Vercel
2. Vá em **Settings** > **Domains**
3. Adicione os domínios:
   - `crm.lemaisolucoes.com.br`
   - `agenda.lemaisolucoes.com.br`

## 3. URLs Disponíveis

### CRM:
- **Simples:** https://crm.lemaisolucoes.com.br/
- **Avançada:** https://crm.lemaisolucoes.com.br/advanced

### Agenda:
- **Simples:** https://agenda.lemaisolucoes.com.br/
- **Avançada:** https://agenda.lemaisolucoes.com.br/advanced

## 4. Verificação

Aguarde a propagação DNS (pode levar até 24h) e teste as URLs.

## 5. Configuração Automática

O Next.js já está configurado para redirecionar automaticamente os subdomínios para suas respectivas pastas.

## Troubleshooting

- Verifique se o DNS propagou: https://dnschecker.org/
- Confirme se os domínios foram adicionados no Vercel
- Aguarde até 24h para propagação completa
