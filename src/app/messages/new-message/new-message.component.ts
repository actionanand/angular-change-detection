import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { output } '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
})
export class NewMessageComponent {
  private msgServ = inject(MessagesService);
  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.msgServ.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
