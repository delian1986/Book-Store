import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
    WavesModule, 
    IconsModule, 
} from 'angular-bootstrap-md'
import { AdminRoutingModule } from "./admin.routing.module";


@NgModule({
    
    imports:[
        CommonModule,
        WavesModule,
        IconsModule,
        AdminRoutingModule
    ],
  
})
export class AdminModule{}