// utils/validateQuery.js

const ALLOWED_COLLECTIONS = ["projects", "topics", "prospects", "resources"];
const ALLOWED_TAG_KEYS = ["skill", "tech", "discipline", "status"];
const ALLOWED_SORT = ["updatedAt", "title"];
const ALLOWED_DIR = ["asc", "desc"];

function isPlainString(x) {
  return typeof x === "string";
}

// Reject arrays/objects (prevents ?tagValue[$ne]=x becoming object)
function requireString(name, value) {
  if (!isPlainString(value)) {
    return `${name} must be a string`;
  }
  return null;
}

function optionalBoundedInt(name, value, min, max) {
  if (value === undefined) return { ok: true, value: undefined };
  if (!isPlainString(value)) return { ok: false, error: `${name} must be an integer string` };
  if (!/^\d+$/.test(value)) return { ok: false, error: `${name} must be an integer` };
  const n = parseInt(value, 10);
  if (n < min || n > max) return { ok: false, error: `${name} must be between ${min} and ${max}` };
  return { ok: true, value: n };
}

function optionalEnum(name, value, allowed) {
  if (value === undefined) return { ok: true, value: undefined };
  if (!isPlainString(value)) return { ok: false, error: `${name} must be a string` };
  if (!allowed.includes(value)) return { ok: false, error: `${name} must be one of: ${allowed.join(", ")}` };
  return { ok: true, value };
}

// Strict query allowlist: reject unknown keys
function rejectUnknownKeys(query, allowedKeys) {
  for (const k of Object.keys(query)) {
    if (!allowedKeys.includes(k)) return `Unknown query param: ${k}`;
  }
  return null;
}

function validateCollectionParam(collection) {
  if (!isPlainString(collection)) return { ok: false, error: "collection must be a string" };
  if (!ALLOWED_COLLECTIONS.includes(collection)) return { ok: false, error: "invalid collection" };
  return { ok: true, value: collection };
}

function validateListQuery(query) {
  const allowedKeys = ["tagKey", "tagValue", "sort", "dir", "page", "limit"];
  const unknownErr = rejectUnknownKeys(query, allowedKeys);
  if (unknownErr) return { ok: false, error: unknownErr };

  const tagKeyRes = optionalEnum("tagKey", query.tagKey, ALLOWED_TAG_KEYS);
  if (!tagKeyRes.ok) return tagKeyRes;

  if (query.tagValue !== undefined) {
    const e = requireString("tagValue", query.tagValue);
    if (e) return { ok: false, error: e };
    const trimmed = query.tagValue.trim();
    if (trimmed.length < 1 || trimmed.length > 64) {
      return { ok: false, error: "tagValue length must be 1..64" };
    }
  }

  // Require tagKey/tagValue together if either is present
  const hasKey = query.tagKey !== undefined;
  const hasVal = query.tagValue !== undefined;
  if (hasKey !== hasVal) {
    return { ok: false, error: "tagKey and tagValue must be provided together" };
  }

  const sortRes = optionalEnum("sort", query.sort, ALLOWED_SORT);
  if (!sortRes.ok) return sortRes;

  const dirRes = optionalEnum("dir", query.dir, ALLOWED_DIR);
  if (!dirRes.ok) return dirRes;

  const pageRes = optionalBoundedInt("page", query.page, 1, 1000);
  if (!pageRes.ok) return pageRes;

  const limitRes = optionalBoundedInt("limit", query.limit, 1, 50);
  if (!limitRes.ok) return limitRes;

  return {
    ok: true,
    value: {
      tagKey: tagKeyRes.value,
      tagValue: query.tagValue ? query.tagValue.trim() : undefined,
      sort: sortRes.value,
      dir: dirRes.value,
      page: pageRes.value ?? 1,
      limit: limitRes.value ?? 20,
    },
  };
}

function validateMetaQuery(query) {
  const allowedKeys = ["tagKey"];
  const unknownErr = rejectUnknownKeys(query, allowedKeys);
  if (unknownErr) return { ok: false, error: unknownErr };

  const tagKeyRes = optionalEnum("tagKey", query.tagKey, ALLOWED_TAG_KEYS);
  if (!tagKeyRes.ok) return tagKeyRes;
  if (!tagKeyRes.value) return { ok: false, error: "tagKey is required" };

  return { ok: true, value: { tagKey: tagKeyRes.value } };
}

module.exports = {
  validateCollectionParam,
  validateListQuery,
  validateMetaQuery,
  ALLOWED_COLLECTIONS,
};
