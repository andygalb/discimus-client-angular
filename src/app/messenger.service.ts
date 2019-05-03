import { Injectable } from '@angular/core';
import {Message, User} from './models/modelInterfaces';
import {HttpClient} from '@angular/common/http';
import config from './config.json';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  newMessages: Message[];

  constructor(private http: HttpClient) {
   this.newMessages = [];
  }

  sendMessage(message: Message) {
    return this.http.post<string>(config.serverAddress + '/api/message', message);
  }

  checkForNewMessages(id: String){
    this.http.get<Message[]>(config.serverAddress + '/api/message/user/' + id).subscribe((messages) => {
      this.newMessages = messages.filter(message => message.read === false);
      }
    ,
      (err) => {console.log(err);}
    )
  }

  getReceivedMessages(id: String) {
    return this.http.get<Message[]>(config.serverAddress + '/api/message/user/' + id);
  }

  getSentMessages(id: String) {
    return this.http.get<Message[]>(config.serverAddress + '/api/message/user/from/' + id);
  }

  markMessageAsRead(id: String) {
    return this.http.put<string>(config.serverAddress + '/api/message/read/' + id, null);
  }

  getSystemUsers() {
    return this.http.get<User[]>(config.serverAddress + '/api/user/all');
  }
}
