import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
    imgId: string = "1";

    private querySubscription: Subscription;
    constructor(private route: ActivatedRoute){
         
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.imgId = queryParam['id'];
            }
        );
    }
}