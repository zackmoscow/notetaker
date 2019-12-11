# notetaker

## index.js
- made the decision to use the note's title as the unique identifier (ID) for delete function. so all paths in this index.js file referencing an note.id value needed to be amended to reference note.title.

## server.js

- other than the above, this was the only file that needed to be developed.
- everything should be pretty self explanatory here. a few exceptions:
1. in POST - push the "new note" object to an array of objects and then rewrite the entire db.json file
2. in DELETE - other than using the note's title to ID a note for deletion, use a filter to remove that note from the array and then send the revised array out to rewrite db.json
