const captureModel = require("../models/capture.js");
const screenshot = require('screenshot-desktop');
const zlib = require('zlib');

let autoCaptureInterval;
const captureScreenshot = async (req, res) => {

    if (!autoCaptureInterval) {
        autoCaptureInterval = setInterval(async (req, res) => {
            try {
                const screenshotData = await screenshot({ format: 'jpeg' });
                const newScreenshot = new captureModel({ image: screenshotData });

                await newScreenshot.save();
                console.log('Screenshot captured and saved to MongoDB');
            } catch (error) {
                console.error('Error capturing screenshot:', error);
                res.status(200).json({ message: 'Auto screenshot capture is already running' })
            }
        }, 30000);

    };
};

const getScreenShots = async (req, res) => {

    try {
        const imageId = req.params.id;
        const image = await captureModel.findById(imageId);

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.set('Content-Type', 'image/png');

        res.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        res.send(image.image);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ message: 'Error fetching image' });
    };
};

const deleteScreenShots = async (req, res) => {
    try {
        const imageId = req.params.id;
        const deletedImage = await captureModel.findByIdAndDelete(imageId);

        if (!deletedImage) {
            return res.status(404).json({ message: 'Image not found' });
        };

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Error deleting image' });
    };
};

const logOut = async (req, res, next) => {
    try {
        if (!req.params.id) return res.json({ msg: "User id is required " });
        onlineUsers.delete(req.params.id);
        return res.status(200).send();
    } catch (ex) {
        next(ex);
    };
};

const autoCapture = async (captureModel) => {
    if (!autoCaptureInterval) {
        autoCaptureInterval = setInterval(async () => {
            try {
                const screenshotData = await screenshot({ format: 'jpeg' });
                const newScreenshot = new captureModel({ image: screenshotData });
                await newScreenshot.save();
                console.log('Screenshot captured and saved to MongoDB');
            } catch (error) {
                console.error('Error capturing screenshot:', error);
            }
        }, 30000);

    };
};

const captured = async (req, res) => {
    try {
        const screenshotData = await screenshot({ format: 'jpeg' });

        await newScreenshot.save();
        console.log('Screenshot captured and saved to MongoDB');

        res.status(200).json({ message: 'Screenshot captured and saved' });
    } catch (error) {
        console.error('Error capturing screenshot:', error);
        res.status(500).json({ message: 'Error capturing screenshot' });
    };
};

const getAllImages = async (req, res) => {
    try {
        const images = await captureModel.find({});

        if (!images || images.length === 0) {
            return res.status(404).json({ message: 'No images found' });
        };

        const compressedImages = await Promise.all(images.map(async (image) => {
            const compressedBuffer = await compressImage(image.buffer);
            return { id: image._id, data: compressedBuffer.toString('base64') };
        }));

        res.status(200).json(compressedImages);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Error fetching images' });
    };
};

async function compressImage(buffer) {
    return new Promise((resolve, reject) => {
        zlib.deflate(buffer, (err, compressedBuffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(compressedBuffer);
            }
        });
    });
};


//   cleanup Function

// cron.schedule('*/2 * * * * *', async () => {
//     try {

//         console.log('Performing cleanup...');
//         const result = await captureModel.deleteMany({});

//         console.log(`${result.deletedCount} screenshots deleted in cleanup`);
//     } catch (error) {
//         console.error('Error cleaning up screenshots:', error);
//     }
// });


module.exports = { captureScreenshot, getScreenShots, deleteScreenShots, autoCapture, captured, getAllImages, logOut };