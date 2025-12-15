const contacts = [
    {
        firstName: "Sara",
        lastName: "Lopez",
        email: "sara.lopez@mail.com",
        phone: "06 00 00 00 00",
        isSubscribed: true
    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com ",
        phone: "06 00 00 00 01",
        isSubscribed: true
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "janesSmith@mail.com ",
        phone: "06 00 00 00 02",
        isSubscribed: false
    }, {
        firstName: "Emily",
        lastName: "Johnson",
        email: "emilyjohnson@mail.com ",
        phone: "06 00 00 00 03",
        isSubscribed: true
    }, {
        firstName: "Michael",
        lastName: "Brown",
        email: "brownmichael@mail.com ",
        phone: "06 00 00 00 04",
        isSubscribed: false
    }

]

// Fonction pour afficher la liste des contacts
function showAllContacts() {
    console.log("--- LISTE DE CONTACTS ---");
    contacts.forEach(contact => {
        console.log(`${contact.firstName} ${contact.lastName} - Email: ${contact.email}`);
    });
};

// Appel de la fonction
showAllContacts();

// Fonction pour afficher les abonnés à la newsletter
function showSubscribers() {
    // La condition "contact.isSubscribed" 
    const subscribers = contacts.filter(contact => contact.isSubscribed);

    console.log("--- ABONNÉS NEWSLETTER ---");
    console.log(subscribers);
}

// Appel de la fonction
showSubscribers();

// Fonction pour extraire les emails des contacts
function extractEmails() {
    const emails = contacts.map(contact => contact.email);
    console.log("--- LISTE DES EMAILS ---");
    console.log(emails);
}

// Appel de la fonction
extractEmails();

// Fonction pour rechercher un contact par son prénom
function findContactByFirstName(firstName) {
    const contact = contacts.find(contact => contact.firstName.toLowerCase() === firstName.toLowerCase());
    if (contact) {
        console.log(`--- CONTACT TROUVÉ : ${firstName} ---`);
        console.log(contact);
    } else {
        console.log(`Aucun contact trouvé avec le prénom : ${firstName}`);
    }
}
// Appel de la fonction
findContactByFirstName("John");

//fonction pour afficher tous les noms de famille
function showAllLastNames() {
    const lastNames = contacts.map(contact => contact.lastName);
    console.log("--- LISTE DES NOMS DE FAMILLE ---");
    console.log(lastNames.join(", "));
};

// Appel de la fonction
showAllLastNames();

//fonction pour trier les contacts par prénom
function sortContactsByFirstName() {
    const sortedContacts = [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log("--- CONTACTS TRIÉS PAR PRÉNOM ---");
    console.log(sortedContacts);
}

// Appel de la fonction
sortContactsByFirstName();

//fonction displayContact pour afficher les détails d'un contact
function displayContact(contact) {
    console.log(`CONTACT : ${contact.firstName} ${contact.lastName}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Téléphone: ${contact.phone}`);
    console.log(`Abonné: ${contact.isSubscribed ? "Oui" : "Non"}`);
}

// Appel de la fonction pour le premier contact
displayContact(contacts[0]);
displayContact(contacts[4]);