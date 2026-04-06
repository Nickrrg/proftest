# Recommendation Formula (v3)

## Goal
Produce one final recommendation from mixed question types.

## Inputs
- Question types: `scale`, `forced`, `scenario`
- Direction keys: `tech`, `analysis`, `creative`, `comm`, `help`, `practice`

## Scoring

For each answered question:

1. **scale** (1..5)
   - Add answer value to the question direction raw score.
   - Add `5` to that direction max score.
2. **forced** (2 options)
   - Add `2` max points to each option direction.
   - Add `2` raw points to selected option direction.
3. **scenario** (4 options)
   - Add `3` max points to each option direction.
   - Add `3` raw points to selected option direction.

Normalized percentage per direction:

`pct[dir] = round(raw[dir] / max[dir] * 100)` (0 if max is 0).

## Final recommendation

1. Sort directions by `pct` descending.
2. `mainKey = ordered[0]` is the single recommendation.
3. `related = ordered.slice(1, 4)` are “what else to consider”.

## Persistence payload

```json
{
  "recommendation": "<mainKey>",
  "pct": {"tech": 0, "analysis": 0, "creative": 0, "comm": 0, "help": 0, "practice": 0},
  "related": ["<dir2>", "<dir3>", "<dir4>"],
  "answers": [],
  "date": "ISO-8601"
}
```
