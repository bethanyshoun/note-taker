const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});


router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  if(notes) {
    req.body.id = notes.length.toString();
  } else 
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted');
  } else {req.body.id = 0}
    res.json(createNewNote(req.body, notes));
});

// router.delete('/api/notes', (req, res) => {
//     req.body.id 
// });

module.exports = router;