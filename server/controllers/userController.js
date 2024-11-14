// const path = require('path');
// const User = require('../models/userModel');
// const multer = require('multer');

// // Configure multer to store files in the 'uploads' folder with original file name
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Create a new user
// const createUser = async (req, res) => {
//   upload.single('photo')(req, res, async (err) => {
//     if (err) return res.status(500).json({ error: 'File upload error' });

//     const { userId, firstName, lastName, phoneNumber, address } = req.body;
//     const photoPath = req.file ? req.file.path : null;

//     if (!userId || !firstName || !lastName || !phoneNumber || !address || !photoPath) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//       const newUser = new User({
//         _id: userId, // Use _id as the primary key
//         firstName,
//         lastName,
//         phoneNumber,
//         address,
//         photo: photoPath, // Store the path of the uploaded file in MongoDB
//       });

//       await newUser.save();
//       res.status(201).json({ message: 'User details saved successfully', data: newUser });
//     } catch (error) {
//       console.error('Error saving user details:', error);
//       res.status(500).json({ error: 'Failed to save user details', details: error.message });
//     }
//   });
// };

// // Get user details
// const getUserDetails = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User details not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user details:', error);
//     res.status(500).json({ error: 'Failed to fetch user details', details: error.message });
//   }
// };

// // Update user details
// const updateUserDetails = async (req, res) => {
//   const { userId } = req.params;
//   const { firstName, lastName, phoneNumber, address } = req.body;

//   try {
//     // Use findByIdAndUpdate to allow partial updates. 
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { firstName, lastName, phoneNumber, address },
//       { new: true, runValidators: true }
//     );

//     if (!user) {
//       return res.status(404).json({ error: 'User details not found' });
//     }

//     res.status(200).json({ message: 'User details updated successfully', data: user });
//   } catch (error) {
//     console.error('Error updating user details:', error);
//     res.status(500).json({ error: 'Failed to update user details', details: error.message });
//   }
// };

// // If you want to include the photo upload in the update function, you can add that logic here.

// module.exports = {
//   createUser,
//   getUserDetails,
//   updateUserDetails,
// };



const path = require('path');
const User = require('../models/userModel');
const multer = require('multer');
const fs = require('fs');

// Configure multer to store files in the 'uploads' folder with original file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsPath = path.join(__dirname, '../uploads');
    
    // Check if uploads directory exists
    if (!uploadsPath) {
      return cb(new Error("Uploads directory does not exist"));
    }

    cb(null, uploadsPath); // Set destination path
  },
  filename: (req, file, cb) => {
    const { userId } = req.body;
    if (!userId) {
      return cb(new Error("User ID is required for the file name"));
    }
    
    // Ensure you include the file extension
    const ext = path.extname(file.originalname); // Get the file extension
    cb(null, `${userId}${ext}`); // Save file with userId as the filename and the original extension
  },
});

const upload = multer({ storage });


// Create a new user
const createUser = async (req, res) => {
  upload.single('photo')(req, res, async (err) => {
    if (err) return res.status(500).json({ error: 'File upload error' });

    const { userId, firstName, lastName, phoneNumber, address } = req.body;
    const photoPath = req.file ? req.file.path : null;

    if (!userId || !firstName || !lastName || !phoneNumber || !address || !photoPath) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const newUser = new User({
        _id: userId, // Use _id as the primary key
        firstName,
        lastName,
        phoneNumber,
        address,
        photo: photoPath, // Store the path of the uploaded file in MongoDB
      });

      await newUser.save();
      res.status(201).json({ message: 'User details saved successfully', data: newUser });
    } catch (error) {
      console.error('Error saving user details:', error);
      res.status(500).json({ error: 'Failed to save user details', details: error.message });
    }
  });
};

// Get user details
const getUserDetails = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User details not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Failed to fetch user details', details: error.message });
  }
};

// Update user details
const updateUserDetails = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, phoneNumber, address } = req.body;

  try {
    // Use findByIdAndUpdate to allow partial updates. 
    const user = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, phoneNumber, address },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User details not found' });
    }

    res.status(200).json({ message: 'User details updated successfully', data: user });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ error: 'Failed to update user details', details: error.message });
  }
};


const getImageByID = async (req, res) => {
  const { id } = req.params; // Using req.params to get the ID from the URL

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  const imagePath = path.join(__dirname, '../uploads', `${id}.jpg`); // Correctly concatenate the filename

  // Check if the file exists
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Send the image file as a response
    res.sendFile(imagePath);
  });
};

module.exports = {
  getImageByID,
};


// If you want to include the photo upload in the update function, you can add that logic here.

module.exports = {
  createUser,
  getUserDetails,
  updateUserDetails,
  getImageByID
};