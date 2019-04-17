import { NgModule } from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { NavbarModule, 
    WavesModule, 
    CarouselModule } from 'angular-bootstrap-md'

@NgModule({
    declarations:[
        NavigationComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        NavbarModule,
        WavesModule,
        CarouselModule
    ],
    exports:[
        NavigationComponent,
        FooterComponent

    ]
})
export class SharedModule{}