import express from 'express';
import Contact from "../models/contacts.model.js";
const router = express.Router();

router.get('/',async (req, res) => {
    const contacts = await Contact.find();
    res.render('home', {contacts: contacts});
});

router.get('/show-contact/:id', async (req, res) => {
    // const contact_detail = await Contact.findOne({"_id": req.params.id})
    const contact_detail = await Contact.findById(req.params.id)
    res.render('show-contact', {contact_detail: contact_detail});
});

router.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

router.post('/add-contact', async (req, res) => {
    // const contact_detail = await Contact.insertOne({
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     address: req.body.address
    // });
    await Contact.create(req.body)
    res.redirect('/');
});

router.get('/update-contact/:id', async (req, res) => {
    const contact_detail = await Contact.findById(req.params.id)
    res.render('update-contact', {contact_detail: contact_detail});
});

router.post('/update-contact/:id', async (req, res) => {
    // const {first_name, last_name, email, phone, address} = req.body;
    // await Contact.findByIdAndUpdate(req.params.id,{first_name, last_name, email, phone, address})
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/');
});

router.get('/delete-contact/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/');
});

export default router;