import express from 'express'
import { createImage, deleteImage, getAllImagenes, getImage, updateImage } from '../controllers/imagesController.js'
const router = express.Router()

router.get('/', getAllImagenes)
router.get('/:id', getImage)
router.post('/', createImage)
router.delete('/:id', deleteImage)
router.put('/:id', updateImage)

export default router