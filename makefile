.PHONY: dev prod down logs ps build-dev build-prod

## Development (base + dev)
dev:
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build

## Production (base + prod)
prod:
	docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build

## Stop whatever stack is running (dev or prod)
down:
	docker compose -f docker-compose.yaml down

## Logs (works for dev or prod)
logs:
	docker compose -f docker-compose.yaml logs -f --tail=200

## Container status
ps:
	docker compose -f docker-compose.yaml ps

## Optional explicit rebuilds
build-dev:
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml build --no-cache

build-prod:
	docker compose -f docker-compose.yaml -f docker-compose.prod.yaml build --no-cache
