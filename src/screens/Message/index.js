import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Message = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Costumer Service 1', messages: [] },
    { id: 2, name: 'Costumer Service 2', messages: [] },
    // Tambahkan lebih banyak kontak sesuai kebutuhan
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const selectContact = (contact) => {
    setSelectedContact(contact);
  };

  const sendMessage = () => {
    if (newMessage) {
      const updatedContacts = contacts.map((contact) => {
        if (contact.id === selectedContact.id) {
          const updatedMessages = [...contact.messages, { text: newMessage, isCustomer: true }];
          return { ...contact, messages: updatedMessages };
        }
        return contact;
      });

      setContacts(updatedContacts);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Message</Text>
      </View>
      <View style={styles.contactList}>
        <ScrollView>
          {contacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              style={[
                styles.contactItem,
                selectedContact && contact.id === selectedContact.id && styles.selectedContact,
              ]}
              onPress={() => selectContact(contact)}
            >
              <Text style={styles.contactName}>{contact.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.messageContainer}>
        {selectedContact && (
          <View style={styles.messageView}>
            <ScrollView style={styles.messageList}>
              {selectedContact.messages.map((message, index) => (
                <View
                  key={index}
                  style={[
                    styles.messageBubble,
                    message.isCustomer ? styles.customerMessage : styles.agentMessage,
                  ]}
                >
                  <Text style={styles.messageText}>{message.text}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.messageInput}>
              <TextInput
                placeholder="Ketik pesan Anda..."
                style={styles.inputField}
                value={newMessage}
                onChangeText={(text) => setNewMessage(text)}
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Kirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'field',
  },
  header: {
    backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  contactList: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
  },
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  selectedContact: {
    backgroundColor: '#E3E3E3',
  },
  contactName: {
    fontSize: 18,
    color: 'black', // Warna teks nama kontak
  },
  messageContainer: {
    flex: 2,
    padding: 16,
  },
  messageView: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    marginBottom: 16,
  },
  messageBubble: {
    padding: 8,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginBottom: 8,
  },
  customerMessage: {
    backgroundColor: '#E3E3E3',
  },
  agentMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  messageInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    padding: 8,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
  },
  sendButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Message;
