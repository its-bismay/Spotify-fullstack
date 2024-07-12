import {v2 as cloudinary} from 'cloudinary'
import albumModel from './../models/album.model.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor

        const imageFile = req.file;

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});


        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData)
        await album.save()

        res.status(200).json({
            success: true,
            message: "Album added",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}

const listAlbum = async (req,res) => {
    try {
        
        const allAlbums = await albumModel.find({})
        res.status(200).json({
            success: true,
            albums: allAlbums
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal server error!"
        })
    }
}

const removeAlbum = async (req,res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id)
        res.status(200).json({
            success: true,
            message: "Album removed."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal server error!"
        })
    }
}

export {addAlbum, listAlbum, removeAlbum}
