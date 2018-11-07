import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  word = '';
  entries = '';
  Definitions = '';
  Example = '';
  antherExample = '';
  Definition(word = '') {
    if (word.length === 0) {
      alert("please type a word insde the input")
    } else {
      axios.post('/Definition', { Definition: word }).then(res => {
        for (let i = 0; i < res.data.results.length; i++) {
          this.data.push(res.data.results[i].lexicalEntries)
        }
        this.word = this.data[0][0].text
        this.entries = this.data[0][0].lexicalCategory
        this.Definitions = this.data[0][0].entries[0].senses[0].definitions[0]
        this.Example = this.data[0][0].entries[0].senses[0].examples[0].text
        this.antherExample = this.data[0][0].entries[0].senses[0].examples[1].text
      }).catch(notFound => {
        alert("this word does not exist, please try another word")
      })



    }
  }

}
