import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  // {path:'',component: AppComponent,    },
  {path:'home',component: HomeComponent,    },
  // {path:'products',component: ProductsComponent,    },
  // {path:'smartship',component: SmartshipComponent,    },
  {path:'orders',component: OrdersComponent,    },
  // {path:'vendors',component: VendorsComponent,    },
  // {path:'updateOrder',component: UpdateOrdersComponent,    },
  // {path:'customers',component: CustomersComponent,    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
