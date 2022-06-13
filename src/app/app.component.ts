import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  public name = "simplelearn";
  public topic = "Data binding";
  image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aPbcg9SP9bj9kPAKR6GfFAHaDD%26pid%3DApi%26h%3D160&f=1"
  onClick(message: any){
    alert(message)
  }
  public random = ""
}
