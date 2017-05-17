import { Component} from '@angular/core';

import { PanelBarItemModel } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styles: [`
        .custom-template {
            padding: 10px;
            text-align: left;
        }
    `]
})
export class LeftPanelComponent {

   private items: Array<PanelBarItemModel> = [
        <PanelBarItemModel> {title: "Call", content: "Channel  00.04.14", expanded: true },
        <PanelBarItemModel> {title: "User Details", children: [
                <PanelBarItemModel> {title: "Child item" }
            ] , expanded:true
        }
    ];

    public onPanelChange(event: any) { console.log("stateChange: ", event); }
 
}
