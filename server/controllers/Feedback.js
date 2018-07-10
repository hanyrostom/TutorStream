const Feedback = require('./../models/feedbackModel');
const Tutor = require('./../models/tutorModel');


exports.addFeedback = (req, res) => {
  // need id, id, tutor_id, rating, content, date, time
  console.log('req.body should have all 5 necessary schema columns', req.body);
  Feedback.addFeedback(req.body, (err, newFeedback) => {
    if (err) {
      console.log('big problem!!!!!!!!', err)
      res.sendStatus(400);
    } else {
      console.log('added!!')
      res.send(201);
    }
  });
};

exports.updateFeedback = (req, res) => {
  // need id, id, tutor_id, rating, content, date, time
  console.log('req.body should have rating and content', req.body);
  Feedback.updateFeedback(req.body, (err, updatedFeedback) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(202);
    }
  });
};

exports.getFeedback = (req, res) => {
  Feedback.getFeedback(req.params, (err, feedback) => {
    if (err) {
      res.status(400).send(`Error getting feedback for ${req.params.id}`);
    } else {
      res.status(202).send(feedback);
    }
  });
};
