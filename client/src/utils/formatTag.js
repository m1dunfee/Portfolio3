export function toReadable(key) {
  const exceptions = [
    "JavaScript", "MongoDB", "Node.js", "OpenGL",
    "CISA", "OWASP", "MATLAB", "TLS", "SQL", "NoSQL",
    "CRISPR", "API", "UI", "AI", "iOS", "DevOps",
    "GitHub", "LinkedIn", "PostgreSQL", "MySQL",
    "GraphQL", "NextJS", "TypeScript", "Angular",
    "MLAndModeling",
  ];

  const placeholders = {};
  let result = key;

  exceptions.forEach((word, i) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const placeholder = `§${i}§`;
    if (new RegExp(escaped).test(result)) {
      placeholders[`§${i}§`] = word;
      result = result.replace(new RegExp(escaped, "g"), placeholder);
    }
  });

  result = result
    .replace(/([A-Z])/g, " $1")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bOf\b/g, "of")
    .replace(/\s+/g, " ")
    .trim();

  Object.entries(placeholders).forEach(([placeholder, word]) => {
    result = result.replace(placeholder, ` ${word} `);
  });

  return result.replace(/\s+/g, " ").trim();
}