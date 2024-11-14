// const express = require('express');
// const { createUser, getUserDetails, updateUserDetails } = require('../controllers/userController');

// const router = express.Router();

// // Route to create a new user
// router.post('/personal-details', createUser);

// // Route to get a user by userId (ensure getUserDetails is defined in userController)
// router.get('/personal-details/:userId', getUserDetails);

// // Route to update user details by userId (ensure updateUserDetails is defined in userController)
// router.put('/personal-details/:userId', updateUserDetails);

// module.exports = router;


const express = require('express');
const { createUser, getUserDetails, updateUserDetails, getImageByID } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/personal-details', createUser);

// Route to get a user by userId (ensure getUserDetails is defined in userController)
router.get('/personal-details/:userId', getUserDetails);

// Route to update user details by userId (ensure updateUserDetails is defined in userController)
router.put('/personal-details/:userId', updateUserDetails);

router.get('/getImageById/:id', getImageByID)

module.exports = router;