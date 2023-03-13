import { createRouter, createWebHistory } from 'vue-router';
import TaskListComponent from '../components/TaskListComponent.vue';
import TaskShowComponent from '../components/TaskShowComponent.vue';
import TaskCreateComponent from '../components/TaskCreateComponent.vue';
import TaskEditComponent from '../components/TaskEditComponent.vue';

const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent,
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: TaskShowComponent,
    props: true,
  },
  {
    path: '/tasks/create',
    name: 'task.create',
    component: TaskCreateComponent,
  },
  {
    path: '/tasks/:taskId/edit',
    name: 'task.edit',
    component: TaskEditComponent,
    props: true,
  },
];

const router = createRouter({
  //historyモード　URLパスの指定方法を設定する。今回の場合通常の「/」区切りのURL
  history: createWebHistory(),
  routes: routes,
});

export default router;
