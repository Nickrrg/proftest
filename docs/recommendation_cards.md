# Recommendation Card Structure (v3)

This document defines the single-result card blocks shown after quiz completion.

## Output model

The result page renders one primary recommendation (not top-3) with the following blocks:

1. **Рекомендованный трек**
   - Direction name and compatibility percent.
2. **Почему этот трек может подойти**
   - Direction-specific rationale based on dominant answer pattern.
3. **Подходящие направления**
   - List of related profile directions/tags for the selected track.
4. **Что еще можно рассмотреть**
   - Nearby alternatives from the next-highest scored directions.
5. **Примеры учреждений**
   - Example institutions/program providers mapped to the selected track.

## Direction metadata requirements

Each direction should include:
- localized display name (`ru` / `uz`)
- rationale text (`why`)
- related direction tags / professions
- exploratory activities
- institution examples

## UI behavior

- Always display exactly one recommendation card.
- Keep language toggle support (`ru`, `uz`) for all section labels and values.
- Persist result with `recommendation`, `pct`, and `related` fields.
