# Makefile for Portfolio3 (Docker Compose)
# Usage examples:
#   make dev
#   make dev-logs
#   make mongo
#   make down
#   make clean

SHELL := /bin/sh

COMPOSE_BASE := docker-compose.yaml
COMPOSE_DEV  := docker-compose.dev.yaml

DC_BASE := docker compose -f $(COMPOSE_BASE)
DC_DEV  := docker compose -f $(COMPOSE_BASE) -f $(COMPOSE_DEV)

# Services (adjust if your compose service names differ)
DB      := db
SERVER  := server
CLIENT  := client
TUNNEL  := cloudflared

.DEFAULT_GOAL := help

help:
	@echo "Targets:"
	@echo "  make dev            - Start dev stack (db + server) with dev overrides"
	@echo "  make dev-all        - Start dev stack (all services) with dev overrides"
	@echo "  make dev-build      - Build and start dev stack (db + server)"
	@echo "  make dev-down       - Stop dev stack"
	@echo "  make dev-reset      - Stop dev stack and remove volumes (DATA LOSS for mongo)"
	@echo "  make dev-logs       - Follow logs for dev stack"
	@echo "  make dev-ps         - Show dev stack status"
	@echo "  make restart        - Restart server container"
	@echo "  make shell          - Open shell in server container"
	@echo "  make mongo          - Open mongosh inside db container"
	@echo "  make mongo-host     - Print host Mongo URI for Compass"
	@echo "  make seed           - Run a seed script inside server container (if present)"
	@echo "  make up             - Start base stack (no dev overrides)"
	@echo "  make down           - Stop base stack"
	@echo "  make clean          - Stop everything and prune dangling stuff (careful)"

# -------------------------
# Dev stack
# -------------------------

dev:
	$(DC_DEV) up -d --build $(DB) $(SERVER)

dev-all:
	$(DC_DEV) up -d --build

# Optional: force recreate containers (useful when images/volumes got weird)
dev-recreate:
	$(DC_DEV) up -d --build --force-recreate

dev-build:
	$(DC_DEV) up -d --build $(DB) $(SERVER)

dev-down:
	$(DC_DEV) down

dev-reset:
	$(DC_DEV) down -v

# -------------------------
# Base stack
# -------------------------

up:
	$(DC_BASE) up -d

down:
	$(DC_BASE) down

# -------------------------
# Convenience
# -------------------------

restart:
	$(DC_DEV) restart $(SERVER)

shell:
	$(DC_DEV) exec $(SERVER) sh

mongo:
	$(DC_DEV) exec $(DB) mongosh

mongo-host:
	@echo mongodb://localhost:27017/portfolio

# If you create a seed script later, set SEED to its path (relative to /app)
# Example: make seed SEED=models/hydration/seed.js
SEED ?= ./models/hydration/hydrationStation.js
seed:
	$(DC_DEV) exec $(SERVER) node $(SEED)

# -------------------------
# Cleanup
# -------------------------

clean:
	@echo "Stopping dev stack..."
	-$(DC_DEV) down
	@echo "Stopping base stack..."
	-$(DC_BASE) down
	@echo "Pruning dangling images/containers/networks..."
	-docker system prune -f
