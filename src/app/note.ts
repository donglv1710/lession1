/**
 * Note:
 * 1. app.routing forRoot con trong modules con la forChild
 * 2. khi tao ra 01 component con trong file module cha se tu dong chen vao declarations[](dang test xoa tu dong chen vao van chay)
 * 3. ban muon dung form thi phai import form in module cungf caaps
 * 4. su dung FormsModule
 * -su dung template form or reactiveForm la con cua app thi phai import modulesForm va declarations vao app.module.ts nhu sinh tu dong o muc 2 neu da xoa di
 * 5. call module child from component cha => ban add
 * router in module con:
 * const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
  }
   imports: [
    //CommonModule,
    //FormsModule,
    //ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
  demo thu muc admin
];
 * 
 */