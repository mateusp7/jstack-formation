const { v4 } = require('uuid');

const db = require('../../database');


let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '11 9999-9999',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'Juliana',
    email: 'juliana@email.com',
    phone: '11 9999-9999',
    category_id: v4()
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    const contact = contacts.find((contact) => contact.id === id);

    return new Promise((resolve) => {
      resolve(contact);
    });
  }

  findByEmail(email) {
    const contact = contacts.find((contact) => contact.email === email);

    return new Promise((resolve) => {
      resolve(contact);
    });
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    const updatedContact = {
      id,
      name,
      email,
      phone,
      category_id
    };

    contacts = contacts.map((contact) => (
      contact.id === id ? updatedContact : contact
    ));

    return new Promise((resolve) => {
      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
