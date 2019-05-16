import {Injectable} from '@angular/core';
import {IMessage, IUser} from './models/modelInterfaces';
import {HttpClient} from '@angular/common/http';
import config from './config.json';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  newMessages: IMessage[];

  constructor(private http: HttpClient) {
    this.newMessages = [];
  }

  sendMessage(message: IMessage) {
    return this.http.post<string>(config.serverAddress + '/api/message', message);
  }

  checkForNewMessages(id: String) {
    this.http.get<IMessage[]>(config.serverAddress + '/api/message/user/' + id).subscribe((messages) => {
        this.newMessages = messages.filter(message => message.read === false);
      }
      ,
      (err) => {
        console.log(err);
      }
    );
  }

  getReceivedMessages(id: String) {
    return this.http.get<IMessage[]>(config.serverAddress + '/api/message/user/' + id);
  }

  getSentMessages(id: String) {
    return this.http.get<IMessage[]>(config.serverAddress + '/api/message/user/from/' + id);
  }

  markMessageAsRead(id: String) {
    return this.http.put<string>(config.serverAddress + '/api/message/read/' + id, null);
  }

  getSystemUsers() {
    return this.http.get<IUser[]>(config.serverAddress + '/api/user/all');
  }
}
