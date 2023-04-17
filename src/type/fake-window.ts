import { type Ref } from 'vue'

export interface FakeWindowItemDate {
    id: number,
		img?: string,
		title: string,
		component:string,
    active:boolean,
    zIndex?:number,
    prop?:any
}