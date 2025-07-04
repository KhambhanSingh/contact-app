import Contact from "../models/contacts.model.js";
import mongoose from "mongoose";

export const Contacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.render('home', {contacts: contacts});
    } catch (error) {
        res.render('500', {message: error})
    }
}

export const contactPage = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404', {message: 'Invalid Id'});
    }else{
        try {
            // const contact_detail = await Contact.findOne({"_id": req.params.id})
            const contact_detail = await Contact.findById(req.params.id)
            if(!contact_detail) return res.render('404', {message: 'Contact Not Found'})
            res.render('show-contact', {contact_detail: contact_detail});
        } catch (error) {
            res.render('500', {message: error})
        }
    }
}

export const addContactPage = (req, res) => {
    try {
        res.render('add-contact');
    } catch (error) {
        res.render('500', {message: error})
    }
}

export const addContact = async (req, res) => {
    try {
        // const contact_detail = await Contact.insertOne({
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     email: req.body.email,
        //     phone: req.body.phone,
        //     address: req.body.address
        // });
        await Contact.create(req.body)
        res.redirect('/');
    } catch (error) {
        res.render('500', {message: error})
    }
}

export const updateContactPage = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404', {message: 'Invalid Id'});
    }else{
        const contact_detail = await Contact.findById(req.params.id)
        try {
            if(!contact_detail) return res.render('404', {message: 'Contact Not Found'})
            res.render('update-contact', {contact_detail: contact_detail});
        } catch (error) {
            res.render('500', {message: error})
        }
    }
}

export const updateContact = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404', {message: 'Invalid Id'});
    }
    // const {first_name, last_name, email, phone, address} = req.body;
    // await Contact.findByIdAndUpdate(req.params.id,{first_name, last_name, email, phone, address})
    const contact_detail = await Contact.findByIdAndUpdate(req.params.id,req.body)
    try {
        if(!contact_detail) return res.render('404', {message: 'Contact Not Found'})
        res.redirect('/');
    } catch (error) {
        res.render('500', {message: error})
    }
    
}

export const deleteContact = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404', {message: 'Invalid Id'});
    }
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.redirect('/');
    } catch (error) {
        res.render('500', {message: error})
    }
}