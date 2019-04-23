import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
    CarouselModule, 
    WavesModule, 
    IconsModule, 
    ButtonsModule 
} from 'angular-bootstrap-md'
import { HomeComponent } from "./home.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        HomeComponent,
        JumbotronComponent,
        CarouselComponent,
    ],
    imports:[
        CommonModule,
        WavesModule,
        CarouselModule,
        IconsModule,
        ButtonsModule,
        SharedModule
    ],
    
    exports:[
        HomeComponent,
        JumbotronComponent,
        CarouselComponent,
        SharedModule
    ]
})
export class HomeModule{}