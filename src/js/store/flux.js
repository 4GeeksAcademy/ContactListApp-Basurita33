const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slug: "bruno-beceiro",
			contacts: [],
			contact: {},
		},
		actions: {

			saveContactToEdit: (contact) => {
				setStore({contact: contact})
			},

			editContact: async (contact, navigate) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/bruno-beceiro/contacts/" + contact.id , {
						method: 'PUT',
						body: JSON.stringify(contact),
						headers: {
							'Content-Type': 'application/json'
						},
					});		
					if (response.ok) {
						const data = await response.json();
						console.log('Contact edited:', data);
						getActions().fetchContacts();
						navigate("/")
					} else {
						console.error('Failed to edit contact');
					}
					
				} catch (error) {
					
				}



			},

			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/bruno-beceiro", {
						method: 'POST',
						body: JSON.stringify(),
						headers: {
							'Content-Type': 'application/json'
						},
					});		
					if (response.ok) {
						const data = await response.json();
						console.log('Agenda created:', data);
						getActions().fetchContacts();
					} else {
						console.error('Failed to create agenda');
					}
				} catch (error) {
					console.error('Error creating agenda:', error);
				}
			},

			fetchContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/bruno-beceiro');
					if (response.status == 404) {
						getActions().createAgenda();
					}
					if (response.ok) {
						const data = await response.json();
						const contacts = data.contacts;						
						setStore({ contacts: contacts });
					} else {
						console.error('Failed to fetch contacts');
					}
			    } catch (error) {
			        console.error('Error fetching contacts:', error);
			    }
			},

		    addContact: async (name, email, phone, address, navigate) => {
		        const store = getStore();
		        const newContact = {
		            name: name,
					email: email,
		            address: address,
		            phone: phone,		            
		        };
				
				console.log(newContact);
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/bruno-beceiro/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(newContact),
					});

					if (response.ok) {
						const createdContact = await response.json();
						getActions().fetchContacts()
						navigate("/")
					} else { console.log('Failed to add contact'); }
				} catch (error) {
					console.error('Error adding contact:', error);
				}
			},

			deleteContact: async (id) => {
				const store = getStore();
				const contact = store.contacts[id];
				console.log(id);

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/bruno-beceiro/contacts/${id}`, {
						method: 'DELETE',
					});
					if(response.ok) {
						const deletedContact = store.contacts.filter((contact) => contact.id !== id)
						setStore({ contacts: deletedContact });
					} else { console.log('Failed to delete contact'); }
				} catch (error) {
					console.error('Error deleting contact:', error);
				}
			},	

			// editContact: async (index, name, address, phone, email) => {
			// 	const store = getStore();
			// 	const contact = store.contacts[index];
			// 	const updatedContact = {
			// 		...contact,
			// 		full_name: name,
			// 		address: address,
			// 		phone: phone,
			// 		email: email
			// 	};

			// 	try {
			// 		const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
			// 			method: 'PUT',
			// 			headers: {
			// 				'Content-Type': 'application/json'
			// 			},
			// 			body: JSON.stringify(updatedContact),
			// 		});
			// 		if(response.ok) {
			// 			const updatedContact = await response.json();
			// 			setStore({ contacts: store.contacts.map((contact, i) => i === index ? updatedContact : contact) });
			// 		} else { console.log('Failed to edit contact'); }
			// 	} catch (error) {
			// 		console.error('Error editing contact:', error);
			// 	}								
			// },
		}
	}
};

export default getState;
