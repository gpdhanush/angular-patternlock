import { Component, OnInit } from '@angular/core';
import PatternLock from 'patternlock';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit() {
    var lock = new PatternLock('#patternHolder',{
    onDraw:function(pattern){
      console.log(pattern);
    }
});
  }
}
