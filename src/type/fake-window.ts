export interface FakeWindowItemDate {
    id: number,
		img?: string,
		title: string,
		component:any ,
	  position?:{
      zIndex:number,
      offset?:number
    },
    prop?:any
}