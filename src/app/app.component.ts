import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
],
})
export class AppComponent {
  title = 'app_day2';
  data: any= {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
};
  value: Date=new Date(Date.now());
  values: string[]= ["nader","Mohammed"];
  color: string = '00000';
  color2: any = {
    r: 100, g: 130, b: 150
};

}
