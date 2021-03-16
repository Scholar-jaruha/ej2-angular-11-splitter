
import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `
<div id='container'>
     <ejs-splitter #horizontal height='250px' width='550px'>
        <e-panes>
            <e-pane>
              <ng-template #content>
                <div class="content">
                  <h3 class="h3">HTML</h3>
                  <div class="code-preview">
                    <<span>!DOCTYPE html></span>
                    <div><<span>html></span></div>
                    <div><<span>body></span></div>
                    <<span>div</span> id="custom-image">
                    <div style="margin-left: 5px"><<span>img</span> src="src/albert.png"></div>
                    <div><<span>div</span>></div>
                    <div><<span>/body></span></div>
                    <div><<span>/html></span></div>
                  </div>
                </div>
              </ng-template>
            </e-pane>
            <e-pane>
              <ng-template #content>
              <div class="content">
                <h3 class="h3">CSS</h3>
                <div class="code-preview">
                <span>img {{ '{' }}</span>
                <div id="code-text">margin:<span>0 auto;</span></div>
                <div id="code-text">display:<span>flex;</span></div>
                <div id="code-text">height:<span>70px;</span></div>
                <span>{{ '}' }}</span>
                </div>
              </div>
              </ng-template>
            </e-pane>
            <e-pane>
              <ng-template #content>
                  <div class="content">
                    <h3 class="h3">JavaScript</h3>
                    <div class="code-preview">
                    <span>var</span> image = document.getElementById("custom-image");
                    <div>image.addEventListener("click", function() {{ '{' }}</div>
                        <div style="padding-left: 20px;">// Code block for click action</div>
                        <span> {{ '}'}} </span>
                    </div>
                  </div>
              </ng-template>
            </e-pane>
        </e-panes>
      </ejs-splitter>
    </div>`
})
export class AppComponent {
constructor() {
}
}