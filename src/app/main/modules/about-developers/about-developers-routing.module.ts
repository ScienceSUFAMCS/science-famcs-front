import { RouterModule, Routes } from "@angular/router";
import { AboutDevelopersComponent } from "./components/about-developers/about-developers.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path: '',
        component: AboutDevelopersComponent,
        children: [],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AboutDevelopersRoutingModule {}