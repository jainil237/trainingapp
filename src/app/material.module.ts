import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule }   from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
import  { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
    imports:[MatButtonModule , MatIconModule ,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule,MatExpansionModule,MatAutocompleteModule],
    exports:[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule, MatSidenavModule,MatToolbarModule, MatListModule,MatTabsModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatDialogModule,MatExpansionModule,MatAutocompleteModule]
})

export class MaterialModule{
        
}