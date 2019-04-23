import { NgModule } from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { NavbarModule, 
    WavesModule, 
    CarouselModule, 
    CardsFreeModule,
    ButtonsModule,
    IconsModule,

    
} from 'angular-bootstrap-md'
import { RouterModule } from "@angular/router";
import { CardComponent } from './card/card.component';

@NgModule({
    declarations:[
        NavigationComponent,
        FooterComponent,
        CardComponent
    ],
    imports:[
        CommonModule,
        NavbarModule,
        WavesModule,
        CarouselModule,
        RouterModule,
        CardsFreeModule,
        CommonModule,
        WavesModule,
        IconsModule,
        ButtonsModule
        
    ],
    exports:[
        NavigationComponent,
        FooterComponent,
        CardComponent

    ]
})
export class SharedModule{}