import Vue from 'vue'
import Router from 'vue-router'
import aList from '@/components/alumno/list'
import aedit from '@/components/alumno/edit'
import aldelete from '@/components/alumno/delete'
import nalumno from '@/components/alumno/new'


import pList from '@/components/profesor/list'
import pedit from '@/components/profesor/edit'
import nedit from '@/components/profesor/new'
import dedit from '@/components/profesor/delete'
import asList from '@/components/asignatura/list'
import matnew from '@/components/asignatura/new'

import cmateria from '@/components/asignatura/form'
import hList from '@/components/horario/list'
import halumno from '@/components/horario/hlist'
import hw from '@/components/HelloWorld'
import pform from '@/components/profesor/form'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'start',
        component: hw,
      },
      {
        path: '/pform',
        name: 'formprof',
        component: pform,
      },
      {
        path: '/aList',
        name: 'aList',
        component: aList,
      },
      {
        path: '/pList',
        name: 'pList',
        component: pList,
      },
      {
        path: '/asList',
        name: 'asList',
        component: asList,
      },
      {
        path: '/hList',
        name: 'hList',
        component: hList,
      },
      {
        path: '/profesor/:profid/edit',
        name: 'pedit',
        component: pedit,
      },
      {
        path: '/horario/:alumnoid/',
        name: 'halumno',
        component: halumno,
      },
      {
        path: '/profesor/:profid/delete',
        name: 'dedit',
        component: dedit,
      },
      {
        path: '/alumno/:alumnoid/delete',
        name: 'aldelete',
        component: aldelete,
      },
      {
        path: '/alumno/:alumnoid/edit',
        name: 'aedit',
        component: aedit,
      },
      {
        path: '/profesor/new',
        name: 'nedit',
        component: nedit,
      },
      {
        path: '/materia/new',
        name: 'matnew',
        component: matnew,
      },
      {
        path: '/alumno/new',
        name: 'nalumno',
        component: nalumno,
      },
      {
        path: '/cargarmateria',
        name: 'cmateria',
        component: cmateria,
      },
      
    ]
});
export default router