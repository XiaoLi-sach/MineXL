import { RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent} from "vue";

export type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>)

type Recordable<T = any> = Record<string, T>;

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meth'> {
    name: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?: AppRouteRecordRaw[];
    props?: Recordable;
    fullPath?: string;
}
