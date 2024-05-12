const Offer = require("../models/offer");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const { uploadFile } = require("./../assets/s3");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

// @desc Get All Offers
// @route GET /api/offer/all
// @access Public
exports.getAllOffers = async (req, res) => {
  try {
    // const offers = await Offer.find({}, { name: 1, feature: 1, isActive: 1 });
    const offers = await Offer.find();

    if (offers) {
      return res.status(200).json({
        offers: offers,
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};

// @desc Create a Offer
// @route POST /api/offer/:userId
// @access Admin
exports.createOffer = async (req, res) => {
  try {
    const { name, feature1, feature2, feature3, isActive } = req.body;
    const feature = [];
    if (!feature1 && !feature2 && !feature3) {
      throw new Error("Feature Required");
    }
    if (feature1) {
      feature.push(feature1);
    }
    if (feature2) {
      feature.push(feature2);
    }
    if (feature3) {
      feature.push(feature3);
    }

    const file = req.file;

    // Uploading file from uploades folder to S3
    // if (file) {
    // const result = await uploadFile(file);
    // await unlinkFile(file.path);

    // console.log(file);
    
    const filename = file?.filename ? file?.filename : "";

    // const offerImage = req.protocol + "://" + req.get("host") + "/uploads/" + filename;
    const offerImage = filename;
    // }

    const offer = await Offer.create({ name, feature, offerImage, isActive });

    res.status(201).json({
      message: "Offer Created",
      offer: offer,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error,
    });
  }
};

// @desc Update a Offer
// @route POST /api/offer/:offerId/:userId
// @access Admin
exports.updateOffer = async (req, res) => {
  try {
    const { name, feature1, feature2, feature3 } = req.body;

    const offer = await Offer.findById(req.params.offerId);

    if (feature1) {
      offer.feature[0] = feature1;
    }
    if (feature2) {
      offer.feature[1] = feature2;
    }
    if (feature3) {
      offer.feature[2] = feature3;
    }

    const file = req.file;

    if (file) {
      const result = await uploadFile(file);
      await unlinkFile(file.path);

      offer.offerImage = result.Location;
    }

    await offer.save();

    res.status(200).json({
      offer: offer,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Saving Failed",
    });
  }
};

// @desc Delete a Product
// @route DELETE /api/offer/:offerId/:userId
// @access Admin
exports.deleteOffer = async (req, res) => {
  try {
    const offer = Offer.findById(req.params.offerId);

    const deletedOffer = await offer.deleteOne();

    if (deletedOffer) {
      return res.json({
        message: `Successfully Deleted Offer`,
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: `Failed to delete this offer`,
    });
  }
};
