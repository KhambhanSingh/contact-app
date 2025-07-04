import express from 'express';
const router = express.Router();

import { Contacts,
    contactPage,
    addContact,
    addContactPage,
    updateContactPage,
    updateContact,
    deleteContact
 } from "../controller/contact.controller.js";

router.get('/', Contacts);

router.get('/show-contact/:id', contactPage);

router.get('/add-contact', addContactPage);

router.post('/add-contact', addContact);

router.get('/update-contact/:id', updateContactPage);

router.post('/update-contact/:id', updateContact);

router.get('/delete-contact/:id', deleteContact);

export default router;