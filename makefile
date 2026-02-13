SHELL := /bin/sh

COMPOSE_BASE := compose.yaml
COMPOSE_DEV  := compose.dev.yaml

DC_DEV  := docker compose -f $(COMPOSE_BASE) -f $(COMPOSE_DEV)
DC_PROD := docker compose -f $(COMPOSE_BASE)

SERVER := server
SEED ?= ./models/hydration/hydrationStation.js

.PHONY: dev prod down seed

dev:
	$(DC_DEV) build --no-cache
	$(DC_DEV) up -d --force-recreate --remove-orphans

prod:
	$(DC_PROD) build --no-cache
	$(DC_PROD) up -d --force-recreate --remove-orphans

down:
	$(DC_DEV) down
	$(DC_PROD) down

seed:
	$(DC_DEV) exec $(SERVER) node $(SEED)
