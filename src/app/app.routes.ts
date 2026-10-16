import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { NgClass } from './components/ng-class/ng-class';
import { Signal } from './components/signal/signal';
import { LinkedSignal } from './components/linked-signal/linked-signal';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { GetApi } from './components/API/get-api/get-api';
import { PostApi } from './components/API/post-api/post-api';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { ResourceApi } from './components/resource-api/resource-api';
import { GetUsers } from './components/ServiceUsingGetUsers/get-users/get-users';
import { NgForComponent } from './components/ng-for/ng-for';
import { NgIfComponent } from './components/ng-if/ng-if';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './auth-guard';
import { Userlayout } from './userlayout/userlayout';
import { tokenInterceptor } from './components/token-interceptor';

export const routes: Routes = [
    { // Default Route

        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: Login
    },

    {
        path: 'after-login-admin',
        component: Layout,
        canActivate: [authGuard],
        data: { role: 'ADMIN' },
        children: [

            {
                path: '',
                redirectTo: 'admin',
                pathMatch: 'full'
            },

            {
                path: 'admin',
                component: Admin
            },
            {
                path: 'dataBinding',
                component: DataBinding
            },
            {
                path: 'ng-class',
                component: NgClass
            },
            {
                path: 'ng-for',
                component: NgForComponent

            },
            {
                path: 'ng-if',
                component: NgIfComponent

            },
            {
                path: 'signal',
                component: Signal
            },
            {
                path: 'linkedSignal',
                component: LinkedSignal
            },
            {
                path: 'templateForm',
                component: TemplateForm
            },
            {
                path: 'reactiveForm',
                component: ReactiveForm
            },
            {
                path: 'getApi-call',
                component: GetApi
            }, {
                path: 'postApi',
                component: PostApi
            },
            {
                path: 'resource-api',
                component: ResourceApi
            },
            {
                path: 'life-cycle',
                component: LifeCycle
            }, {
                path: 'getUsersThroughService',
                component: GetUsers
            }


        ]
    },

    {
        path: 'after-login-user',
        component: Userlayout,
        canActivate: [authGuard],
        data: { role: 'USER' },
        children: [

            // {
            //     path: 'admin',
            //     component: Admin
            // },

            {
                path: '',
                redirectTo: 'dataBinding',
                pathMatch: 'full'
            },

            {
                path: 'dataBinding',
                component: DataBinding
            },
            {
                path: 'ng-class',
                component: NgClass
            },
            {
                path: 'ng-for',
                component: NgForComponent

            },
            {
                path: 'ng-if',
                component: NgIfComponent

            },
            {
                path: 'signal',
                component: Signal
            },
            {
                path: 'linkedSignal',
                component: LinkedSignal
            },
            {
                path: 'templateForm',
                component: TemplateForm
            },
            {
                path: 'reactiveForm',
                component: ReactiveForm
            },
            {
                path: 'getApi-call',
                component: GetApi
            }, {
                path: 'postApi',
                component: PostApi
            },
            {
                path: 'resource-api',
                component: ResourceApi
            },
            {
                path: 'life-cycle',
                component: LifeCycle
            }, {
                path: 'getUsersThroughService',
                component: GetUsers
            }


        ]
    }



];
