import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
    CarouselModule, 
    WavesModule, 
    IconsModule, 
    CardsFreeModule, 
    ButtonsModule 
} from 'angular-bootstrap-md'
import { HomeComponent } from "./home.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { CarouselComponent } from "./carousel/carousel.component";


@NgModule({
    declarations:[
        HomeComponent,
        JumbotronComponent,
        CarouselComponent
    ],
    imports:[
        CommonModule,
        WavesModule,
        CarouselModule,
        IconsModule,
        CardsFreeModule,
        ButtonsModule
    ],
    
    exports:[
        HomeComponent,
        JumbotronComponent,
        CarouselComponent
    ]
})
export class HomeModule{}