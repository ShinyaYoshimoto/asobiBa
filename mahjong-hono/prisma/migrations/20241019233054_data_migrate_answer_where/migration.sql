-- This is an empty migration.
BEGIN;

update "Answer"
set
  "symbolCount" = null
where
  "fanCount" > 4;

COMMIT;