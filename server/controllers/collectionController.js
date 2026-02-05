const { 
    Project,
    Topic, 
    Prospect,
    Book 
} = require("../models/ContentSchema");

const {
  validateCollectionParam,
  validateListQuery,
  validateMetaQuery,
} = require("../utils/validateQuery");

const MODELS = {
  projects: Project,
  topics: Topic,
  prospects: Prospect,
  books: Book,
};

const TAG_PATH = {
  skill: "metadata.index.skill",
  tech: "metadata.index.tech",
  discipline: "metadata.index.discipline",
  status: "metadata.status",
};

function buildSafeQuery(q) {
  const filter = {};
  if (q.tagKey && q.tagValue) {
    filter[TAG_PATH[q.tagKey]] = q.tagValue;
  }

  const sort = {};
  if (q.sort) sort[q.sort] = q.dir === "asc" ? 1 : -1;

  const skip = (q.page - 1) * q.limit;

  return { filter, sort, skip, limit: q.limit };
}

exports.list = async (req, res, next) => {
  console.log("HIT dynamic list", req.params.collection, req.query);
  try {
    const cRes = validateCollectionParam(req.params.collection);
    if (!cRes.ok) return res.status(400).json({ ok: false, error: cRes.error });

    const qRes = validateListQuery(req.query);
    if (!qRes.ok) return res.status(400).json({ ok: false, error: qRes.error });

    const collection = cRes.value;
    const q = qRes.value;

    const Model = MODELS[collection];
    const { filter, sort, skip, limit } = buildSafeQuery(q);

    const [items, total] = await Promise.all([
      Model.find(filter).sort(sort).skip(skip).limit(limit).lean(),
      Model.countDocuments(filter),
    ]);

    return res.json({
      ok: true,
      collection,
      total,
      page: q.page,
      limit,
      items,
    });
  } catch (err) {
    next(err);
  }
};

exports.meta = async (req, res, next) => {
  console.log("HIT dynamic meta", req.params.collection, req.query);
  try {
    const cRes = validateCollectionParam(req.params.collection);
    if (!cRes.ok) return res.status(400).json({ ok: false, error: cRes.error });

    const qRes = validateMetaQuery(req.query);
    if (!qRes.ok) return res.status(400).json({ ok: false, error: qRes.error });

    const collection = cRes.value;
    const { tagKey } = qRes.value;

    const Model = MODELS[collection];
    const path = TAG_PATH[tagKey];

    const values = await Model.distinct(path);
    values.sort((a, b) => String(a).localeCompare(String(b)));

    return res.json({ ok: true, collection, tagKey, values });
  } catch (err) {
    next(err);
  }
};

exports.facets = async (req, res, next) => {
  console.log("HIT dynamic facets", req.params.collection);
  try {
    const cRes = validateCollectionParam(req.params.collection);
    if (!cRes.ok) return res.status(400).json({ ok: false, error: cRes.error });

    const collection = cRes.value;
    const Model = MODELS[collection];

    const FACET_KEYS = ["discipline", "tech", "skill"];

    // Run distinct for each facet key in parallel
    const pairs = await Promise.all(
      FACET_KEYS.map(async (k) => {
        const path = TAG_PATH[k];
        const values = await Model.distinct(path);

        values.sort((a, b) => String(a).localeCompare(String(b)));

        // normalize: keep non-empty strings
        const cleaned = values
          .filter((x) => typeof x === "string" && x.trim())
          .map((x) => x.trim());

        return [k, cleaned];
      })
    );

    // Return the bare object so you can loop over it directly
    return res.json(Object.fromEntries(pairs));
  } catch (err) {
    next(err);
  }
};
