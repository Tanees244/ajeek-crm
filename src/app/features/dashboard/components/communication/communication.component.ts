import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  sender: string;
  time: string;
  message: string;
  isUser?: boolean;
  avatar?: string;
}

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  imports: [CommonModule, FormsModule]
})
export class CommunicationComponent {
  searchText = '';
  newMessage = '';
  selectedChat: any = null;

  activeChats = [
    {
      name: 'Abdul Hassan',
      ticketId: '10931235',
      role: 'Technician',
      time: '10:49 AM',
      lastMessage: 'Checked and replaced the faulty compressor.'
    },
    // Add more chats as needed
  ];

  messages: ChatMessage[] = [
    {
      sender: 'You',
      time: '11:20 AM',
      message: 'Hi Khaled Al-Dossari, can you update me on the status of the repair job for the AC unit at the Main Street location?',
      isUser: true
    },
    {
      sender: 'Khaled Al-Dossari',
      time: '11:21 AM',
      message: "Hi, yes, I've completed the diagnostics, and it looks like the compressor needs replacing. I've already ordered the part and should have it installed by tomorrow."
    }
  ];

  selectChat(chat: any) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        message: this.newMessage,
        isUser: true
      });
      this.newMessage = '';
    }
  }

}
