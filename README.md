# Jenkins

## Subir container Jenkins com dependencias necessárias do projeto

```powershell
docker compose -p jenkins -f docker-compose.jenkins.yml up -d --build
```

## Configurar

- Adicionar tarefa multibranh pipeline